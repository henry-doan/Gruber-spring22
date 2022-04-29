import {Row, Col, Container, Form, Image} from 'react-bootstrap';
import {useState} from 'react';

import { ServiceConsumer } from '../../providers/ServiceProvider';
import { FormControl, PriceFormCon } from '../styles/Styles';

const PriceForm = ({}) => {
  
  const [formVals, setFormVals] = useState({sdate: '', stime: '', pets: '', lastcut: '', details: '', additions: '', notes: ''})

  const [price, setPrice] = useState(0)

  const handleSubmit = (e) => {
    setPrice( Pets )
  }

  const Pets = (pets) => {
    if (pets === 'dogs') {
      price = 10
    } else if (pets === 'cats') {
      price = 5
    } else {
      price = 0
    }
    return price
  }




  return(
    <>
      <PriceFormCon>
        <Row>
          <h2>Want the Best lawn mowing prices possible?</h2>
          
          <p>Add more details about your yard for the best lawn mowing prices possible</p>
        </Row>

        <Form onSubmit={handleSubmit}>

          
          <Row>
            <Form.Group className="mb-3">
              <Form.Label><h5>1. Pick the day you want your lawn cut</h5></Form.Label>
              <Form.Control
                name='sdate'
                value={formVals.sdate}
                onChange={(e) => setFormVals({...formVals, sdate: e.target.value })}
                type="date"
                required
                // getSelectedDay={formVals.sdate}
                endDate={100}
                selectDate={new Date("2020-04-30")}
                labelFormat={"MMMM " + "yyyy"}
                color={"orange"}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className="mb-3">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  name='stime'
                  value={formVals.stime}
                  onChange={(e) => setFormVals({...formVals, stime: e.target.value })}
                  type="time"
                  placeholder="Time"
                  required
                />
              </Form.Group>
          </Row>
            
            
         
          
          <Form.Group className="mb-3" >
            
            <Row><Form.Label><h5>2. Do you have outdoor pets?</h5></Form.Label> <br></br></Row>
              <Row>
                <Col>
                  <Image src='https://images.unsplash.com/photo-1603272743626-df5c7f34c0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60' roundedCircle width='109px'></Image>
                  <Form.Check
                  label={<p>DOGS</p>}
                  name='pets'
                  value={formVals.pets}
                  onChange={(e) => setFormVals({...formVals, pets: 'dogs' })}
                  type="radio"
                  required
                  />
                </Col>


                <Col>
                  <Image src='https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60' roundedCircle width='109px'></Image>
                  <Form.Check
                  label={<p>CATS</p>}
                  name='pets'
                  value={formVals.pets}
                  onChange={(e) => setFormVals({...formVals, pets: 'cats' })}
                  type="radio"
                  required
                  />
                </Col>
                <Col>
                  <Image src='https://images.unsplash.com/photo-1567000167302-74d2008ca271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bm8lMjBwZXRzJTIwc2lnbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60' width='109px' roundedCircle></Image>
                  <Form.Check
                  label={<p>NO PETS</p>}
                  name='pets'
                  value={formVals.pets}
                  onChange={(e) => setFormVals({...formVals, pets: 'no pet' })}
                  type="radio"
                  required
                  />
                </Col>
              </Row>
          </Form.Group>
          
                 
          <Form.Group className="mb-3">

              <Row><Form.Label><h5>3. When was your last cut?</h5></Form.Label></Row>
              <Row>
                <Col>
                  <Image src='https://images.unsplash.com/photo-1622977265115-cce36eb43f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXNzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60' roundedCircle width='109px'></Image>
                  <Form.Check
                  label={<h6>1 Week Ago</h6>}
                  name='pets'
                  value={formVals.lastcut}
                  onChange={(e) => setFormVals({...formVals, lastcut: '1 week ago' })}
                  type="radio"
                  required
                  />
                </Col>
                <Col>
                  <Image src='https://images.unsplash.com/photo-1622977265115-cce36eb43f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXNzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60' roundedCircle width='109px'></Image>
                  <Form.Check
                  label={<h6>2 Weeks Ago</h6>}
                  name='pets'
                  value={formVals.lastcut}
                  onChange={(e) => setFormVals({...formVals, lastcut: '2 weeks ago' })}
                  type="radio"
                  required
                  />
                </Col>
                <Col>
                  <Image src='https://images.unsplash.com/photo-1622977265115-cce36eb43f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXNzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60' roundedCircle width='109px'></Image>
                  <Form.Check
                  label={<h6>3 Weeks Ago</h6>}
                  name='pets'
                  value={formVals.lastcut}
                  onChange={(e) => setFormVals({...formVals, lastcut: '3 weeks ago' })}
                  type="radio"
                  required
                  />
                </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><h5>4. If the first mowing goes well... How often do you want service?</h5></Form.Label>
            <Form.Check
              label={<p>Once a week</p>}
              // label={<h6>One Week Ago</h6>}
              name='lastcut'
              value={formVals.lastcut}
              onChange={(e) => setFormVals({...formVals, lastcut: 'once a week' })}
              type="radio"
              required
              />
              <Form.Check
              label={<p>Twice a week</p>}
              name='lastcut'
              value={formVals.lastcut}
              onChange={(e) => setFormVals({...formVals, lastcut: 'twice a week' })}
              type="radio"
              required
              />
              <Form.Check
              label={<p>Just this once</p>}
              name='lastcut'
              value={formVals.lastcut}
              onChange={(e) => setFormVals({...formVals, lastcut: 'just this once' })}
              type="radio"
              required
              />
          </Form.Group>

          <Form.Group className="mb-3">

              <Row><Form.Label><h5>5. Let your bidders know the level of mowing detail you’re expecting</h5></Form.Label></Row>
              <Row>
                <Col>
                  <Image src='https://images.unsplash.com/photo-1622977265115-cce36eb43f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXNzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60' roundedCircle width='109px'></Image>
                  <Form.Check
                  label={<h6>Just knock it down</h6>}
                  name='pets'
                  value={formVals.details}
                  onChange={(e) => setFormVals({...formVals, details: 'knock it down' })}
                  type="radio"
                  required
                  />
                </Col>
                <Col>
                  <Image src='https://images.unsplash.com/photo-1622977265115-cce36eb43f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXNzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60' roundedCircle width='109px'></Image>
                  <Form.Check
                  label={<h6>I like the lawn neat</h6>}
                  name='details'
                  value={formVals.details}
                  onChange={(e) => setFormVals({...formVals, details: 'neat' })}
                  type="radio"
                  required
                  />
                </Col>
                <Col>
                  <Image src='https://images.unsplash.com/photo-1622977265115-cce36eb43f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXNzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60' roundedCircle width='109px'></Image>
                  <Form.Check
                  label={<h6>I want it to be perfect</h6>}
                  name='pets'
                  value={formVals.details}
                  onChange={(e) => setFormVals({...formVals, details: 'perfect' })}
                  type="radio"
                  required
                  />
                </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">

            <Row><Form.Label><h5>6. Are you in terested in any other yard work in addition to weekly mowing? (can be added later alaster after first mowing</h5></Form.Label></Row>
            <Row>
              <Col>
                <Image src='https://images.unsplash.com/photo-1622977265115-cce36eb43f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXNzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60' roundedCircle width='109px'></Image>
                <Form.Check
                label={<h6>Shrub Pruning</h6>}
                name='pets'
                value={formVals.details}
                onChange={(e) => setFormVals({...formVals, details: 'pruning' })}
                type="radio"
                required
                />
              </Col>
              <Col>
                <Image src='https://images.unsplash.com/photo-1622977265115-cce36eb43f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXNzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60' roundedCircle width='109px'></Image>
                <Form.Check
                label={<h6>Pulling / Spray Weeds</h6>}
                name='details'
                value={formVals.details}
                onChange={(e) => setFormVals({...formVals, details: 'pulling' })}
                type="radio"
                required
                />
              </Col>
              <Col>
                <Image src='https://images.unsplash.com/photo-1622977265115-cce36eb43f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXNzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60' roundedCircle width='109px'></Image>
                <Form.Check
                label={<h6>Leaf Removal</h6>}
                name='pets'
                value={formVals.details}
                onChange={(e) => setFormVals({...formVals, details: 'leaf removal' })}
                type="radio"
                required
                />
              </Col>
              <Col>
                <Image src='https://images.unsplash.com/photo-1622977265115-cce36eb43f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXNzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60' roundedCircle width='109px'></Image>
                <Form.Check
                label={<h6>Re-mulching of Beds</h6>}
                name='pets'
                value={formVals.details}
                onChange={(e) => setFormVals({...formVals, details: 'mulching' })}
                type="radio"
                required
                />
              </Col>
              <Col>
                <Image src='https://images.unsplash.com/photo-1622977265115-cce36eb43f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXNzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60' roundedCircle width='109px'></Image>
                <Form.Check
                label={<h6>Turf Seeding</h6>}
                name='pets'
                value={formVals.details}
                onChange={(e) => setFormVals({...formVals, details: 'seeding' })}
                type="radio"
                required
                />
              </Col>
            </Row>
            </Form.Group>
          
          <Row>
            <Form.Group className="mb-3">
              <Form.Label><h5>7. Now... Add the important details your lawn person should know</h5></Form.Label>
              <FormControl
                name='notes'
                value={formVals.notes}
                onChange={(e) => setFormVals({...formVals, notes: e.target.value })}
                type="text"
                placeholder="I have a HUGE dog. Don't mow the backyard or else die."
                required
            
              />
            </Form.Group>
          </Row>

        </Form>

        <p>Your intial set of quotes will be for mowing only. After the 1st mow you can add Shrub Pruning or other services. but not yet at this step</p>

       
      </PriceFormCon>
     
      

    </>
  )
}

const ConnectedPriceForm = (props) => (
  <ServiceConsumer>
    { value => <PriceForm {...value} {...props} /> }
  </ServiceConsumer>
)

export default ConnectedPriceForm;