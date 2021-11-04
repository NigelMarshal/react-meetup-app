import React from 'react'
import MeetupList from '../Components/Layout/Meetups/MeetupList';
const TEST_DATA = [
    {
        id: 'm1',
        title: 'Meetup 1',
        image:
          'https://via.placeholder.com/350x150',
        address: '245 Street',
        description:
          'Pub?!',
      },
      {
        id: 'm2',
        title: 'Meetup2',
        image:
          'https://via.placeholder.com/350x150',
        address: '123 Street',
        description:
          'Meet me at the phoooone',
      },
];

const AllMeetupsPage = () => {
    return (
     <section>
         <h1>All Meetups</h1>
          <MeetupList meetups={TEST_DATA}/>
     </section>
    )
}

export default AllMeetupsPage
