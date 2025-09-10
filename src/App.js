import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import {
  Menu as MenuIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import DayTimeline from './components/DayTimeline';
import EventsView from './components/EventsView';

function App() {
  const [selectedDay, setSelectedDay] = useState(1); // Day 2 is selected by default (matches the image)

  const days = [
    { id: 0, date: '7 Sep', day: 'Sun', icon: 'truck' },
    { id: 1, date: '8 Sep', day: 'Mon', icon: 'truck' },
    { id: 2, date: '9 Sep', day: 'Tue', icon: 'truck' },
    { id: 3, date: '10 Sep', day: 'Wed', icon: 'truck' },
    { id: 4, date: '11 Sep', day: 'Thu', icon: 'truck' },
  ];

  const eventsData = {
    0: {
      title: 'Arrival Day',
      subtitle: 'Welcome & Setup',
      events: [
        {
          id: 1,
          title: 'Airport Pickup',
          time: '09:00 am - 10:00 am',
          location: 'Airport Terminal 1',
          status: 'Completed',
          attendees: 2,
          icon: '✈️',
          startTime: '09:00',
          endTime: '10:00',
          duration: 60,
          progress: 100
        },
        {
          id: 2,
          title: 'Hotel Check-in',
          time: '11:00 am - 12:00 pm',
          location: 'Hotel Lobby',
          status: 'Completed',
          attendees: 2,
          icon: '🏨',
          startTime: '11:00',
          endTime: '12:00',
          duration: 60,
          progress: 100
        }
      ]
    },
    1: {
      title: 'Customer Sessions',
      subtitle: 'Client Meetings Day',
      events: [
        {
          id: 1,
          title: 'Keynote & Strategy',
          time: '09:00 am - 10:00 am',
          location: 'Meeting Room 1',
          status: 'Progress',
          attendees: 10,
          icon: '🚚',
          startTime: '09:00',
          endTime: '10:00',
          duration: 60,
          progress: 75
        },
        {
          id: 2,
          title: 'Technology Showcase',
          time: '10:00 am - 11:30 am',
          location: 'Meeting Room 1',
          status: 'Progress',
          attendees: 12,
          icon: '💻',
          startTime: '10:00',
          endTime: '11:30',
          duration: 90,
          progress: 40
        },
        {
          id: 3,
          title: 'Panel Discussion',
          time: '12:30 pm - 01:30 pm',
          location: 'Meeting Room 1',
          status: 'Scheduled',
          attendees: 12,
          icon: '💼',
          startTime: '12:30',
          endTime: '13:30',
          duration: 60,
          progress: 0
        }
      ]
    },
    2: {
      title: 'Workshop Day',
      subtitle: 'Hands-on Training',
      events: [
        {
          id: 1,
          title: 'Technical Workshop',
          time: '09:00 am - 12:00 pm',
          location: 'Training Room A',
          status: 'Scheduled',
          attendees: 15,
          icon: '⚙️',
          startTime: '09:00',
          endTime: '12:00',
          duration: 180,
          progress: 0
        },
        {
          id: 2,
          title: 'Lunch & Networking',
          time: '12:00 pm - 01:00 pm',
          location: 'Cafeteria',
          status: 'Scheduled',
          attendees: 20,
          icon: '🍽️',
          startTime: '12:00',
          endTime: '13:00',
          duration: 60,
          progress: 0
        }
      ]
    },
    3: {
      title: 'Site Visits',
      subtitle: 'Facility Tours',
      events: [
        {
          id: 1,
          title: 'Manufacturing Tour',
          time: '09:00 am - 11:00 am',
          location: 'Production Floor',
          status: 'Scheduled',
          attendees: 8,
          icon: '🏭',
          startTime: '09:00',
          endTime: '11:00',
          duration: 120,
          progress: 0
        },
        {
          id: 2,
          title: 'Q&A Session',
          time: '11:30 am - 12:30 pm',
          location: 'Conference Room',
          status: 'Scheduled',
          attendees: 8,
          icon: '❓',
          startTime: '11:30',
          endTime: '12:30',
          duration: 60,
          progress: 0
        }
      ]
    },
    4: {
      title: 'Departure',
      subtitle: 'Wrap-up & Goodbye',
      events: [
        {
          id: 1,
          title: 'Final Presentation',
          time: '09:00 am - 10:30 am',
          location: 'Main Hall',
          status: 'Scheduled',
          attendees: 25,
          icon: '📊',
          startTime: '09:00',
          endTime: '10:30',
          duration: 90,
          progress: 0
        },
        {
          id: 2,
          title: 'Airport Transfer',
          time: '02:00 pm - 03:00 pm',
          location: 'Hotel Lobby',
          status: 'Scheduled',
          attendees: 2,
          icon: '🚖',
          startTime: '14:00',
          endTime: '15:00',
          duration: 60,
          progress: 0
        }
      ]
    }
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar 
        position="sticky" 
        elevation={0} 
        sx={{ 
          bgcolor: 'background.paper', 
          color: 'text.primary',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              textAlign: 'center',
              fontWeight: 600,
              color: 'text.primary'
            }}
          >
            Day Timeline
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="more"
          >
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ py: 2, px: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DayTimeline
            days={days}
            selectedDay={selectedDay}
            onDaySelect={setSelectedDay}
          />
        </motion.div>

        <motion.div
          key={selectedDay}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <EventsView
            dayData={eventsData[selectedDay]}
            dayInfo={days[selectedDay]}
          />
        </motion.div>
      </Container>
    </Box>
  );
}

export default App;
