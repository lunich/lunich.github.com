// File links init
function initFiles()
{
  r_panel = $("message");
  def_text = r_panel.innerHTML;
  $$(".item a").each(function(element, index)
  {
    element.onmouseover = function(event)
    {
      r_panel.innerHTML = element.readAttribute("rel");
    };
    element.onmouseout = function(event)
    {
      r_panel.innerHTML = def_text;
    };
  });
}

function initMenu()
{
  $$(".menu-holder").each(function(element, index)
  {
    element.hide();
  });
  var _t;
  $$(".menu-item a").each(function(element, index)
  {
    element.onclick = function(event)
    {
      menu_body = $(element.readAttribute("rel"));
      menu_body.show();
      pos = element.positionedOffset();
      menu_body.style.left = pos[0] + "px";
      menu_body.style.top = (pos[1] + element.getHeight()) + "px";
      menu_body.onmouseover = function(event)
      {
        if(_t)
        {
          clearTimeout(_t);
        }
      };
      menu_body.onmouseout = function(event)
      {
        if(_t)
        {
          clearTimeout(_t);
        }
        _t = setTimeout(function()
        {
          menu_body.hide();
				}, 400);
      };
    };
  });
}

// Page initialization
function initPage()
{
  initFiles();
  initMenu();
}

// Setup events
if(window.addEventListener)
{
  window.addEventListener("load", initPage, false);
}
else if(window.attachEvent && !window.opera)
{
  window.attachEvent("onload", initPage);
}
