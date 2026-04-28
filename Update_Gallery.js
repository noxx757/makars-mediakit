var fso = new ActiveXObject("Scripting.FileSystemObject");
var currDir = WScript.ScriptFullName.substr(0, WScript.ScriptFullName.lastIndexOf("\\"));
var folderPath = currDir + "\\галерея сайта";
var folder = fso.GetFolder(folderPath);
var files = new Enumerator(folder.Files);
var list = [];
for (; !files.atEnd(); files.moveNext()) {
   var name = files.item().Name.toLowerCase();
   if (name.indexOf(".jpg") > -1 || name.indexOf(".jpeg") > -1 || name.indexOf(".png") > -1 || name.indexOf(".webp") > -1) {
       list.push('"' + files.item().Name + '"');
   }
}
var out = fso.CreateTextFile(currDir + "\\gallery_data.js", true, true);
out.WriteLine("const galleryImages = [\n  " + list.join(",\n  ") + "\n];");
out.Close();
