$.fn.adify = function(){
  $(this).on("submit",function(ev){
    ev.preventDefault();
    var data = {};
    var selector = $(this).data("selector");
    $(this).find("input:not([type='submit']),textarea").each(function(index,el){
      console.log(el);
       data[el.name] = el.value;
    });
    console.log(build_tr(data));
    $(selector).append(build_tr(data));
    return false;
  });
  $(document).on("click",".deleter",function(){
    $(this).parent().parent().remove();
  });
  function build_tr(data){
    var html = "<tr>"
    for(k in data){
       console.log(k);
      html += "<td>"+data[k]+"</td>";
    }
    html += "<td><a href='#' class='deleter'>Eliminar</a></td>";
    html += "</tr>";
    return html;
  }
}