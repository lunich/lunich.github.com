function change_sel(id)
{
  for(i = 0;  i < links.length; ++i)
  {
    $(links[i]).removeClassName('selected');
  }
  $(id).addClassName('selected');
  selection = id;
}
function sel_next()
{
  cur = links.indexOf(selection);
  if((links.length - 1) != cur)
  {
    change_sel(links[cur+1]);
  }
}
function sel_prev()
{
  cur = links.indexOf(selection);
  if(0 != cur)
  {
    change_sel(links[cur-1]);
  }
}
function go()
{
  window.location.href = $('link-'+selection);
}
function key_check(event)
{
  var KeyID = event.keyCode;
  switch(KeyID)
  {
    case 38:
      sel_prev();
    break;
    case 40:
      sel_next();
    break;
    case 13:
      val = $('cmd-line').value;
      if("" == val)
      {
        go();
      }
      else if(-1 != links.indexOf(val))
      {
        change_sel(val);
        go();
      }
      else
      {
        $('cmd-line').value = "";
      }
    break;
  }
}
document.onkeyup = key_check;
