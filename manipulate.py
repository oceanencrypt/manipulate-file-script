try:
    from browser import window, document, console
    import javascript
except Exception as e:
    console.log(e)

javascript.import_js("manipulate.js", alias="CONFIG")
jq = window.jQuery
CONFIG = CONFIG

class EditorPlayground():

    ## setting up editor

    encoded_js_playground_configuration1 = window.encodeURIComponent(window.JSON.stringify(CONFIG.js_only_player_config)).replace("'","%27").replace('"',"%22"),
    encoded_js_playground_configuration2 = window.encodeURIComponent(window.JSON.stringify(CONFIG.js_playground_config)).replace("'","%27").replace('"',"%22"),
    endurl_without_editor = CONFIG.URL_FRONT_PART + encoded_js_playground_configuration1[0]
    endurl_with_editor = CONFIG.URL_FRONT_PART + encoded_js_playground_configuration2[0]

    def __init__(self) -> None:
        # actions
        jq("#create-btn").on('click', EditorPlayground.create_file_onclick)

    @staticmethod
    def render_delete_btn():
        document.getElementById("buttons").innerHTML = ""
        for _f in CONFIG.js_playground_config.files:
            jq("#buttons").append(f"""
            <div id="delete-file-btn">
                <span style="margin-right: 3px;">{_f}</span>
                <input type="text" style="display: none;" value="{_f}" id={_f}>
                <button class="delete-btn">Delete</button>
            </div>
            """)
        jq(".delete-btn").on('click', EditorPlayground.delete_file_onclick)
    
    @staticmethod
    def delete_onclick(ev):
        pass
    
    @staticmethod
    def create_file_onclick(ev):
        input_obj = document.getElementById("file-name")
        file_name = input_obj.value
        if ".js" not in file_name:
            file_name += ".js"
        CONFIG.js_playground_config.files[f"{file_name}"] = ""
        input_obj.value = ""
        updateConfig(CONFIG)
        render_iframe(EditorPlayground.endurl_with_editor)

    @staticmethod
    def delete_file_onclick(ev):
        filename = ev.target.previousElementSibling.value
        files = {}
        for key in CONFIG.js_playground_config.files:
            if key == filename:
                continue
            else:
                files[key] = CONFIG.js_playground_config.files[key]
        console.log(files)
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
    document["iframe-wrapper"].innerHTML = f"""
    <iframe id="iframe" src={link}>
    </iframe>
        """
    EditorPlayground.render_delete_btn()

def render_page():
    EditorPlayground()
    render_iframe()

render_page()
