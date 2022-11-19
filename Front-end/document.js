window.onload = function(e){
e.preventDefault();
};

tinymce.init({
    selector: "#textContent",
    plugins: 'link image code fullscreen', 
    menubar: false,
    toolbar: 'undo redo  | forecolor | styles |fontsize| styleselect | bold italic underline | alignleft aligncenter alignright alignjustify | outdent indent | code | link image| print | fullscreen|help',
    setup: function(editor){
    editor.on("change", function(){
    editor.save();
    })}
 });
    let saveBtn = document.getElementById("saveBtn")
    saveBtn.addEventListener("click", function(e){
    e.preventDefault();
    
    let title = document.getElementById("title").value
    let textContent = document.getElementById("textContent").value
    document.getElementById("textResult").innerHTML = "Document saved!"+ "<br><br>" + document.getElementById("title").value  + document.getElementById("textContent").value;
    
let txtContent = {
    title: title,
    textContent: textContent
}
fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(txtContent),
    })
    .then((res) => res.json())
    .then((data) => {
    console.log(data)
    })
});