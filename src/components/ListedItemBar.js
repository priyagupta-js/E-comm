import React from "react";
import { Col, Row } from "react-bootstrap";

function ListedItemBar (){
    return(
<header className="ItemsBar">
<Row>
<Col className="All-Items"><span>All</span></Col>
<Col className="item-1"><span>Mobile</span></Col>
</Row>

</header>
    );
}

export default ListedItemBar;