function handle_AJAX_Complete(){4==AJAX_req.readyState&&200==AJAX_req.status&&(json=JSON.parse(AJAX_req.responseText),comp=new SVGAnim(json,width,height,fps),container.appendChild(comp.s.node))}function AJAX_JSON_Req(e){(AJAX_req=new XMLHttpRequest).open("GET",e,!0),AJAX_req.setRequestHeader("Content-type","application/json"),AJAX_req.onreadystatechange=handle_AJAX_Complete,AJAX_req.send()}var jsonfile="static/js/agua.json",fps=15,width=398,height=382,AJAX_req,container=document.getElementById("animacao__agua");AJAX_JSON_Req(jsonfile);