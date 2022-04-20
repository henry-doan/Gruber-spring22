import {Row, Col, Container, Form} from 'react-bootstrap';
import {useState} from 'react';

const PriceForm = ({}) => {
  
  const [formVals, setFormVals] = useState({sdate: '', pets: '', lastcut: '', details: '', additions: '', notes: ''})

  const handleSubmit = (e) => {

  }


  return(
    <>
      <Container>
        <h2>Want the Best lawn mowing prices possible?</h2>
        
        <p>Add more details about your yard for the best lawn mowing prices possible</p>

        <Form onSubmit={handleSubmit}>

          
          <Form.Group className="mb-3">
            <Form.Label><h5>1. Pick the day you want your lawn cut</h5></Form.Label>
            <Form.Control 
              name='sdate'
              value={formVals.sdate}
              onChange={(e) => setFormVals({...formVals, sdate: e.target.value })}
              type="date" 
              placeholder="Date" 
              required
            />
          </Form.Group>
            
            
         
          <Form.Group className="mb-3" >
            <Form.Label><h5>2. Do you have outdoor pets?</h5></Form.Label>
              
              <Form.Check
              label={<img src='https://images.unsplash.com/photo-1603272743626-df5c7f34c0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60' width='109px'></img>}
              
              name='pets'
              value={formVals.pets}
              onChange={(e) => setFormVals({...formVals, pets: e.target.value })}
              type="radio"
              required
              />
              <Form.Check
              label={<img src='https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60' width='109px'></img>}
              name='pets'
              value={formVals.pets}
              onChange={(e) => setFormVals({...formVals, pets: e.target.value })}
              type="radio"
              required
              />
              <Form.Check
              label={<img src='https://images.unsplash.com/photo-1567000167302-74d2008ca271?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bm8lMjBwZXRzJTIwc2lnbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60' width='109px'></img>}
              name='pets'
              value={formVals.pets}
              onChange={(e) => setFormVals({...formVals, pets: 'no pet' })}
              type="radio"
              required
              />
          </Form.Group>
                 
          <Form.Group className="mb-3">
            <Form.Label><h5>3. When was your last cut?</h5></Form.Label>
            <Form.Check
              label={<img src='https://images.unsplash.com/photo-1622977265115-cce36eb43f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXNzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60' width='109px'></img> }
              // label={<h6>One Week Ago</h6>}
              name='pets'
              value={formVals.lastcut}
              onChange={(e) => setFormVals({...formVals, lastcut: e.target.value })}
              type="radio"
              required
              />
              <Form.Check
              label={<img src='https://images.unsplash.com/photo-1622977265115-cce36eb43f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXNzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60' width='109px'></img>}
              name='pets'
              value={formVals.lastcut}
              onChange={(e) => setFormVals({...formVals, lastcut: e.target.value })}
              type="radio"
              required
              />
              <Form.Check
              label={<img src='https://images.unsplash.com/photo-1622977265115-cce36eb43f18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyYXNzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=400&q=60' width='109px'></img>}
              name='pets'
              value={formVals.lastcut}
              onChange={(e) => setFormVals({...formVals, lastcut: e.target.value })}
              type="radio"
              required
              />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><h5>4. If the first mowing goes well... How often do you want service?</h5></Form.Label>
            <Form.Check
              label={<p>Once a week</p>}
              // label={<h6>One Week Ago</h6>}
              name='lastcut'
              value={formVals.lastcut}
              onChange={(e) => setFormVals({...formVals, lastcut: e.target.value })}
              type="radio"
              required
              />
              <Form.Check
              label={<p>Twice a week</p>}
              name='lastcut'
              value={formVals.lastcut}
              onChange={(e) => setFormVals({...formVals, lastcut: e.target.value })}
              type="radio"
              required
              />
              <Form.Check
              label={<p>Just this once</p>}
              name='lastcut'
              value={formVals.lastcut}
              onChange={(e) => setFormVals({...formVals, lastcut: e.target.value })}
              type="radio"
              required
              />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><h5>5. Let your bidders know the level of mowing detail you're expecting</h5></Form.Label>
            <Form.Check
              label={<p>Just know it down</p>}
              // label={<h6>One Week Ago</h6>}
              name='details'
              value={formVals.details}
              onChange={(e) => setFormVals({...formVals, details: e.target.value })}
              type="radio"
              required
              />
              <Form.Check
              label={<p>I like the lawn neat</p>}
              name='details'
              value={formVals.details}
              onChange={(e) => setFormVals({...formVals, details: e.target.value })}
              type="radio"
              required
              />
              <Form.Check
              label={<p>I want it to be perfect</p>}
              name='details'
              value={formVals.details}
              onChange={(e) => setFormVals({...formVals, details: e.target.value })}
              type="radio"
              required
              />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label><h5>6. Are you interested in any other yard work in addition to weekly mowing? (can be added later after first mowing)</h5></Form.Label>
            <Form.Check
              label={<p>Shrub Pruning</p>}
              name='pets'
              value={formVals.lastcut}
              onChange={(e) => setFormVals({...formVals, lastcut: e.target.value })}
              type="radio"
              required
              />
              <Form.Check
              label={<p>Pulling/Spray Weeds</p>}
              name='pets'
              value={formVals.lastcut}
              onChange={(e) => setFormVals({...formVals, lastcut: e.target.value })}
              type="radio"
              required
              />
            <Form.Check
              label={<p>Leaf Removal</p>}
              name='pets'
              value={formVals.lastcut}
              onChange={(e) => setFormVals({...formVals, lastcut: e.target.value })}
              type="radio"
              required
              />
              <Form.Check
              label={<p>Re-mulching of beds</p>}
              name='pets'
              value={formVals.lastcut}
              onChange={(e) => setFormVals({...formVals, lastcut: e.target.value })}
              type="radio"
              required
              />
              <Form.Check
              label={<p>Turf Seeding</p>}
              name='pets'
              value={formVals.lastcut}
              onChange={(e) => setFormVals({...formVals, lastcut: e.target.value })}
              type="radio"
              required
              />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label><h5>7. Now... Add the important details your lawn person should know</h5></Form.Label>
            <Form.Control 
              name='notes'
              value={formVals.sdate}
              onChange={(e) => setFormVals({...formVals, notes: e.target.value })}
              type="textarea" 
              placeholder="I have a HUGE dog. Don't mow the backyard or else die." 
              required
            />
          </Form.Group>

        </Form>

        <p>Your intial set of quotes will be for mowing only. After the 1st mow you can add Shrub Pruning or other services. but not yet at this step</p>


      </Container>
    </>
  )
}

export default PriceForm;