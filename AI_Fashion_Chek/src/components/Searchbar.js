import './searchbarstyle.css';

 const Searchbar= () =>{
    return(
        <div className='box body'>
            <input type="text" placeholder='search...' />
            <a href="/">
                <i className='fas fa-search'></i>
            </a>
        </div>
    );
 }
 export default Searchbar;