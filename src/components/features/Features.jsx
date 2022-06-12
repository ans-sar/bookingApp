
import "./features.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Button from 'react-bootstrap/Button';

const Features  = () => {
 return (
     <div> <CardGroup  className="featured">
     <Card>
       <Card.Img variant="top" src="https://cf.bstatic.com/xdata/images/region/square250/66333.webp?k=ba149e36e802032cd6ec35570600fe35878c339011b88cdd9f1fd084a8ac73b6&o="
          alt=""
           />
       <Card.Body>
         <Card.Title>Lake District</Card.Title>
         
       </Card.Body>
       <Card.Footer>
         <small className="text-muted">532 propertie</small>
       </Card.Footer>
     </Card>
     <Card>
            <Card.Img variant="top" src="https://cf.bstatic.com/xdata/images/city/square250/613095.webp?k=8caf960d96a59e284ac1518ac8777e89d17fda6572acd84dbec151f627c7bf07&o="/>
       <Card.Body>
         <Card.Title>London</Card.Title>
         
       </Card.Body>
       <Card.Footer>
         <small className="text-muted">532 propertie</small>
       </Card.Footer>
     </Card>
     <Card>
       <Card.Img variant="top"  src="https://cf.bstatic.com/xdata/images/city/square250/686185.webp?k=dc6e30f60fa23f042b872ecd6d769650f89c54414ad64ea1e5e62fafef31a609&o="
          />
       <Card.Body>
         <Card.Title>Edinburgh</Card.Title>
         
       </Card.Body>
       <Card.Footer>
         <small className="text-muted">532 propertie</small>
       </Card.Footer>
     </Card>
   </CardGroup>
   </div>
 );
};
export default Features;