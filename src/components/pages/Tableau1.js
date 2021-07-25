import React, {Component} from 'react'
import tableauSoftware from 'tableau-api';

const url = "https://public.tableau.com/views/IPLdatasetanalysis4/iplstory2?:language=en-US&:display_count=n&:origin=viz_share_link"

class Tableau extends Component{

    componentDidMount(){
        this.initViz();
    }

    initViz = () =>{
        const options = {
            hideTabs : true,
            width: '1280px',
            height: '720px',
            

        }
        const vizContainer = this.vizContainer;
        this.div = new window.tableauSoftware.Viz(vizContainer, url, options);


    }

    render(){
        return(
            <div ref = {div => this.vizContainer = div}>

            </div>
        )
    }
}

export default Tableau;