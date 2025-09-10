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
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import DayTimeline from './components/DayTimeline';
import EventsView from './components/EventsView';
import useTimelineData from './hooks/useTimelineData';

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
              fontWeight: 700,
              background: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 50%, #fd79a8 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.3rem',
              letterSpacing: '0.5px',
            }}
          >
            5-Day Visit Timeline
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
