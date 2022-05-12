import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
    return (
        <div className="hero my-20">
            <div className=" flex items-center justify-between w-full flex-col lg:flex-row-reverse lg:px-8">
                <img src={chair} className="max-w-sm md:max-w-2xl rounded-lg sm:shadow-2xl" alt='dentist-cahir'/>
                <div>
                   <div className='lg:w-100 w-10/12 mx-auto lg:mx-0 sm:mt-16 mr-12 lg:mr-0 '>
                    <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    />
                   </div>
                   
                </div>
            </div>
            
        </div>
    );
};

export default AppointmentBanner;