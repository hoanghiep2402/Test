import React,{Component} from 'react';
import classes from './Search.css'

class Search extends Component{

    render() {
        const buttonClasses=[classes.btn,classes.btn__primary,classes.btn__inside,classes.uppercase].join(' ');
        return (
            <form >
                <input type="text" className={classes.form__field} placeholder="Search.."/>
                <button type="button" className={buttonClasses}>Search</button>
            </form>
        );
    }

}

export default Search;