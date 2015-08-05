$(function() {


$().ready(function(){
   $("#MySplitter").splitter();
 });

});


      var  monkeyPatch = function(info){
          console.log("called");
       $("#rightPane").toggle();
       $(".vsplitbar").toggle();

      };

    (function() {
      // Create a CM instance
      var ed = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        lineWrapping: true,
        readOnly: false,
        dragDrop: true,
        mode : "xml",
    htmlMode: true,
      extraKeys: {
        "F11": function(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
          monkeyPatch();

        },
        "Esc": function(cm) {
          if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
             monkeyPatch();

        }
      }

      });
      $('.run').click(function (ev) {
        var content = ed.getValue();
        var iframe = $(".preview").contents().find('html');
        iframe.html(content);
      })


    })();
