import  React ,{ Component } from 'react';
import { connect } from 'react-redux'
import {Submit , FormWrapper , ReservationUserDetails , ReservationInput ,ReservationLabel} from './reservation-page/styled/reservationStyle'
import { createReservation , getMovie , getShow } from '../store/actions';
import { Field, reduxForm, formValueSelector,formValues  } from "redux-form";


class ConfirmReservationPage extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = async () => {
         await this.props.getShow(this.props.match.params.id);
         await this.props.getMovie(this.props.show.movie);
      }

    handleSubmit() {
        this.formSelector = formValueSelector("ConfirmReservationPage");
    }

    render(){
        return (
            <FormWrapper>
                <ReservationUserDetails onSubmit={this.handleSubmit}>
                    <ReservationLabel forName="firstName">Name</ReservationLabel>
                    <Field name="firstName" component={ReservationInput} type="text" placeholder="First Name" cl/>
                    <Field name="lastName" component={ReservationInput} type="text" placeholder="Last Name" cl/>
                    <Submit type="submit">Confirm</Submit>
                </ReservationUserDetails>
            </FormWrapper>
        );
    }
}

ConfirmReservationPage = reduxForm({
    form: 'ConfirmReservationPage'  // a unique identifier for this form
  })(ConfirmReservationPage)
  
  const mapStateToProps = state => {
    return { show: state.show, movie: state.movie }
  }
  
  export default connect(mapStateToProps, { getShow, getMovie})(ConfirmReservationPage);
