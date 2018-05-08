import React from "react";
class CoursesPage extends React.Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      course:{title: ""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }


  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h1>Add Courses</h1>
        <input
            type="text"
            onChange={this.onTitleChange}
            value={this.state.course.title} />

          <input
              type="submit"
              value="Save"
              onClick={this.onClickSave} />
      </div>
    );
  }

    onClickSave() {
        alert(`Saving ${this.state.course.title}`);
    }
}

export  default CoursesPage;