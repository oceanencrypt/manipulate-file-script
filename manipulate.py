try:
    from browser import window, document, console
    import javascript
except Exception as e:
    console.log(e)

javascript.import_js("manipulate.js", alias="CONFIG")
jq = window.jQuery
CONFIG = CONFIG


BUTTONS = {
    "file-btn": """<div class="screen-outlook"><span class="input"><input class="screen-name" value="@@value" disabled/></span><button class="playground-file-btn"><i style="pointer-events: none;" class="fa-solid fa-xmark" disabled></i></button></div>""",
    "add-file-btn": """<div class="screen-outlook"><button class="add-file-btn"><i style="pointer-events: none;" class="fa-solid fa-plus" disabled></i></button></div>"""
}

TEMPLATE = {
    "iframe": """<div style="display: flex;" class="file-btn-wrapper">
       @@file-btns
       @@add-file 
    </div>
    <iframe id="iframe" src="@@link">
    </iframe>"""
}

class EditorPlayground():

    ## setting up editor
    rename_file_id = 1
    encoded_js_playground_configuration1 = window.encodeURIComponent(window.JSON.stringify(CONFIG.js_only_player_config)).replace("'","%27").replace('"',"%22"),
    encoded_js_playground_configuration2 = window.encodeURIComponent(window.JSON.stringify(CONFIG.js_playground_config)).replace("'","%27").replace('"',"%22"),
    endurl_without_editor = CONFIG.URL_FRONT_PART + encoded_js_playground_configuration1[0]
    endurl_with_editor = CONFIG.URL_FRONT_PART + encoded_js_playground_configuration2[0]
    prev_filename = ""

    def __init__(self) -> None:
        pass
    
    @staticmethod
    def render_file_btns():
        html = ""
        for _f in CONFIG.js_playground_config.files:
            html += BUTTONS["file-btn"].replace("@@value", _f)
        return html
    
    @staticmethod
    def rename_file_ondblclick(ev):
        EditorPlayground.prev_filename = ev.target.value
        ev.target.disabled = False
        ev.target.focus()

    @staticmethod
    def save_onmouseout(ev):
        prev_filename = EditorPlayground.prev_filename
        filename = ev.target.value
        files = {}
        files2 = {}
        data = None
        check_file = False
        for key in CONFIG.js_playground_config.files:
            if key == prev_filename:
                data = CONFIG.js_playground_config.files[key]
                break
            else:
                files[key] = CONFIG.js_playground_config.files[key]
        files[filename] = data
        for key in CONFIG.js_playground_config.files:
            if key == prev_filename:
                check_file = True
            if check_file and key !=prev_filename:
                files2[key] = CONFIG.js_playground_config.files[key]
        new_files = {**files, **files2}
        CONFIG.js_playground_config["files"] = new_files
        updateConfig(CONFIG)
        render_iframe(EditorPlayground.endurl_with_editor)
        ev.target.disabled = True
    
    @staticmethod
    def create_file_onclick(ev):
        if f"renameMe{EditorPlayground.rename_file_id}.js" not in CONFIG.js_playground_config.files:
            CONFIG.js_playground_config.files[f"renameMe{EditorPlayground.rename_file_id}.js"] = ""
        else:
            EditorPlayground.rename_file_id += 1
            CONFIG.js_playground_config.files[f"renameMe{EditorPlayground.rename_file_id}.js"] = ""
        updateConfig(CONFIG)
        render_iframe(EditorPlayground.endurl_with_editor)

    @staticmethod
    def delete_file_onclick(ev):
        filename = ev.target.previousElementSibling.firstElementChild.value
        files = {}
        for key in CONFIG.js_playground_config.files:
            if key == filename:
                continue
            else:
                files[key] = CONFIG.js_playground_config.files[key]
        CONFIG.js_playground_config["files"] = files
        updateConfig(CONFIG)
        render_iframe(EditorPlayground.endurl_with_editor)


        
        

    
def updateConfig(CONFIG:dict):
    EditorPlayground.encoded_js_playground_configuration1 = window.encodeURIComponent(window.JSON.stringify(CONFIG.js_only_player_config)).replace("'","%27").replace('"',"%22"),
    EditorPlayground.encoded_js_playground_configuration2 = window.encodeURIComponent(window.JSON.stringify(CONFIG.js_playground_config)).replace("'","%27").replace('"',"%22"),
    EditorPlayground.endurl_without_editor = CONFIG.URL_FRONT_PART + EditorPlayground.encoded_js_playground_configuration1[0]
    EditorPlayground.endurl_with_editor = CONFIG.URL_FRONT_PART + EditorPlayground.encoded_js_playground_configuration2[0]

def render_iframe(link:str = EditorPlayground.endurl_with_editor):
    document["iframe-wrapper"].innerHTML = "";
    document["iframe-wrapper"].innerHTML = TEMPLATE["iframe"].replace("@@link", link)\
        .replace("@@file-btns", EditorPlayground.render_file_btns())\
            .replace("@@add-file", BUTTONS["add-file-btn"])
    jq(".input").on('dblclick', EditorPlayground.rename_file_ondblclick)
    jq(".input").on('focusout', EditorPlayground.save_onmouseout)
    jq("button.playground-file-btn").on("click", EditorPlayground.delete_file_onclick)
    jq("button.add-file-btn").on("click", EditorPlayground.create_file_onclick)

def render_page():
    EditorPlayground()
    render_iframe()

render_page()
