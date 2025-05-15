
import './Menu.css'

var ischecked=0;


function Menu(){
    return(
    <nav>
        <input type="checkbox" id="check"></input>
        <label for="check" className="checkbtn">
            <i class="fa fa-bars" id="checkbx"></i>
        </label>
        <img className="logo"></img>
        <ul>
            <li><a href="/acasa">Acasă</a></li>
            <li><a href="/portofoliu">Portofoliu</a></li>
            <li><a href="/despre">Despre noi</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
    );
}

export default Menu;
