function Sidebar({MainComponent}){
return (
<>
    <div className="sidebar-tab">
<MainComponent Name="Profile"/>
<MainComponent Name="Class List"/>
<MainComponent Name="Session Slot"/>
<MainComponent Name="Overall Attendence"/>
<MainComponent Name="Daily Attendance"/>
<MainComponent Name="Settings"/>
<MainComponent Name="Logout"/>
    </div>
</>
 );
}

function MainComponent({Name}){
    function onClickedOn(){
    alert('Clicked')
  }

return (
<div className="Button">
    <button className="click" onClick={onClickedOn}>
        {Name}</button>
</div>
);
}
export default Sidebar;
export {MainComponent};