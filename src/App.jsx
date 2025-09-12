import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  CircularProgress,
  Alert,
} from '@mui/material';
import {
  Menu as MenuIcon,
  MoreVert as MoreVertIcon,
  Flight as FlightIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import DayTimeline from './components/DayTimeline.jsx';
import EventsView from './components/EventsView.jsx';
import TataLogo from './components/TataLogo.jsx';
import PostNordLogo from './components/PostNordLogo.jsx';
import useTimelineData from './hooks/useTimelineData.js';

function App() {
  const [selectedDay, setSelectedDay] = useState(1); // Day 2 is selected by default
  const { data: timelineData, loading, error } = useTimelineData();

  // Loading state
  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        flexDirection: 'column',
        gap: 2
      }}>
        <CircularProgress size={60} />
        <Typography variant="h6" color="text.secondary">
          Loading Timeline Data...
        </Typography>
      </Box>
    );
  }

  // Error state
  if (error) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        p: 3
      }}>
        <Alert severity="error" sx={{ maxWidth: 400 }}>
          <Typography variant="h6" gutterBottom>
            Failed to Load Timeline Data
          </Typography>
          <Typography variant="body2">
            {error}
          </Typography>
        </Alert>
      </Box>
    );
  }

  // Ensure we have valid data
  if (!timelineData || !timelineData.days || !timelineData.events) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        p: 3
      }}>
        <Alert severity="warning" sx={{ maxWidth: 400 }}>
          <Typography variant="h6" gutterBottom>
            No Timeline Data Available
          </Typography>
          <Typography variant="body2">
            Please check your data configuration.
          </Typography>
        </Alert>
      </Box>
    );
  }

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
            aria-label="menu"
            sx={{ mr: 2, color: '#005d92' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              textAlign: 'center',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 50%, #fd79a8 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.3rem',
              letterSpacing: '0.5px',
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: 2, 
              width: '100%'
            }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  transition: { duration: 0.4, type: "spring", stiffness: 300 }
                }}
              >
                <PostNordLogo width={100} height={20} color="#00A0D6" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  transition: { duration: 0.4, type: "spring", stiffness: 300 }
                }}
              >
                <TataLogo width={140} height={34} color="#000000" />
              </motion.div>
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ py: 2, px: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DayTimeline
            days={timelineData.days}
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
            dayData={timelineData.events[selectedDay]}
            dayInfo={timelineData.days[selectedDay]}
          />
        </motion.div>
      </Container>
    </Box>
  );
}

export default App;
