import React, {Component} from 'react';
import activityForm from '../../styles/activityForm.css';

class ActivityForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

  }

  handleChange({ target: { value, name } }) {
    this.props.handleActivityChange(value, name)
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.handleActivitySubmit();
  }

  handleEdit(e){
    e.preventDefault();
    this.props.handleActivityEdit();
  }

render(){
  const isTrue = this.props.displayActivityForm;

  if (!isTrue ){
    return null;
  }
  return(



  <form className='new-activity-form'>
  <fieldset>

    <div>
      <label className='activity-table'>Activity Title</label>
      <input type="text" id="title" name="title" value={this.props.activity.title} onChange={this.handleChange} required/>
    </div>



    <div>
      <label className='activity-table'>Day</label>
      <select name="day" id="day" value={this.props.activity.day} onChange={this.handleChange} required>
        <option value="" defaultValue disabled hidden>Select Here</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
    </div>

    <div>
      <label className='activity-table'>Start Time</label>
      <input type="time" id="startTime" name="startTime" value={this.props.activity.startTime} onChange={this.handleChange} required/>
    </div>

    <div>
      <label className='activity-table'>End Time</label>
      <input type="time" id="endTime" name="endTime" value={this.props.activity.endTime} onChange={this.handleChange} required/>
    </div>



      <div>
          {this.props.activity.ageCheckboxes.map((age, i) => {
            return(
              <>

          	<li className='checks' key={i}>
              {age.year}
          	  <input value={age.checked}

               checked={age.checked} type="checkbox" onChange={this.props.onToggle.bind(this, i)} />
          	</li>
            </>
          )})}

      </div>

    <div>
      <label className='activity-table'>Gender</label>
      <select name="gender" id="gender" value={this.props.activity.gender} onChange={this.handleChange} required>
        <option value="" defaultValue disabled hidden>Select Here</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Both">Both</option>

      </select>
    </div>

    <div>
      <label className='activity-table'>Location</label>
      <input type="text" id="location" name="location" value={this.props.activity.location} onChange={this.handleChange} required/>
    </div>

    <div>
      <label className='activity-table'>Description</label>
      <textarea id="description" name="description" value={this.props.activity.description} onChange={this.handleChange} required>
      </textarea>
    </div>



    <div style={{ display: this.props.edit ? 'block' : 'none'}
    }>
      <button type="submit" onClick={this.handleEdit}>Update Activity</button>
    </div>

    <div style={{ display: this.props.edit ? 'none' : 'block'}
  }>
      <button type="submit" onClick={this.handleSubmit}>Save Activity</button>
    </div>



    </fieldset>
  </form>
)
}


}

export default ActivityForm;
