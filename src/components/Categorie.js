import React from 'react';
const Categorie = () => {
    return (   
    <div className="col-sm-3">
    <div className="left-sidebar">
      <h2>Category</h2>
      <div className="panel-group category-products" id="accordian">{/*category-productsr*/}
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                <span className="badge pull-right"><i className="fa fa-plus" /></span>
                Pc de Bureau
              </a>
            </h4>
          </div>
          <div id="sportswear" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
              <li><a href="#">dell</a></li>
                <li><a>hp</a></li>
                <li><a>toshiba</a></li>
                <li><a>msi</a></li>
                <li><a>asus</a></li>
                <li><a>mac</a></li>
                <li><a>lenovo</a></li>
               
              </ul>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                <span className="badge pull-right"><i className="fa fa-plus" /></span>
                    Pc Portable
              </a>
            </h4>
          </div>
          <div id="mens" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li><a href="#">dell</a></li>
                <li><a>hp</a></li>
                <li><a>toshiba</a></li>
                <li><a>msi</a></li>
                <li><a>asus</a></li>
                <li><a>mac</a></li>
                <li><a>lenovo</a></li>
                
              </ul>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                <span className="badge pull-right"><i className="fa fa-plus" /></span>
                    Telephone Portable
              </a>
            </h4>
          </div>
          <div id="mens" className="panel-collapse collapse">
            <div className="panel-body">
              <ul>
                <li><a>Fendi</a></li>
                <li><a>Guess</a></li>
                <li><a>Valentino</a></li>
                <li><a>Dior</a></li>
                <li><a>Versace</a></li>
                <li><a>Armani</a></li>
                <li><a>Prada</a></li>
                <li><a>Dolce and Gabbana</a></li>
                <li><a>Chanel</a></li>
                <li><a>Gucci</a></li>
              </ul>
            </div>
          </div>
        </div>







      </div>
    </div>
  </div> );
}
 
export default Categorie;