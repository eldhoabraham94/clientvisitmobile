import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';

const SessionDetailPopup = ({ open, onClose, sessionData, dayInfo }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!sessionData) return null;

  // Sample data for demonstration
  const getSampleContent = (title) => {
    const sampleData = {
      description: "This session focuses on strategic planning and implementation of logistics solutions for improved delivery efficiency and customer satisfaction.",
      agenda: [
        "Welcome and introductions",
        "Current logistics overview",
        "Challenges and opportunities",
        "Proposed solutions",
        "Implementation timeline",
        "Q&A session"
      ],
      minutes: [
        "Meeting started at scheduled time with all attendees present",
        "Reviewed current delivery performance metrics",
        "Discussed new route optimization software",
        "Agreed on pilot program timeline for next quarter",
        "Action items assigned to respective teams",
        "Next meeting scheduled for following week"
      ]
    };
    return sampleData;
  };

  const content = getSampleContent(sessionData.title);

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={onClose}
          maxWidth="md"
          fullWidth
          fullScreen={isMobile}
          PaperProps={{
            component: motion.div,
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.8, opacity: 0 },
            transition: { type: "spring", stiffness: 300, damping: 30 },
            sx: {
              borderRadius: { xs: 0, sm: 3 },
              background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
              boxShadow: '0 20px 60px rgba(108, 92, 231, 0.15)',
              overflow: 'hidden'
            }
          }}
        >
          {/* Header */}
          <DialogTitle
            sx={{
              background: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
              color: 'white',
              position: 'relative',
              pb: 2,
              pt: 2
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  {sessionData.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
                  {dayInfo?.date} • {sessionData.time}
                </Typography>
              </Box>
              <IconButton onClick={onClose} sx={{ color: 'white' }}>
                <CloseIcon />
              </IconButton>
            </Box>
          </DialogTitle>

          {/* Content */}
          <DialogContent sx={{ p: 3, maxHeight: '70vh', overflow: 'auto' }}>
            {/* Basic Info */}
            <Box sx={{ mb: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Chip
                icon={<AccessTimeIcon />}
                label={sessionData.time}
                variant="outlined"
                sx={{ borderColor: '#6c5ce7', color: '#6c5ce7' }}
              />
              <Chip
                icon={<LocationOnIcon />}
                label={sessionData.location}
                variant="outlined"
                sx={{ borderColor: '#6c5ce7', color: '#6c5ce7' }}
              />
              <Chip
                icon={<PeopleIcon />}
                label={`${sessionData.attendees} attendees`}
                variant="outlined"
                sx={{ borderColor: '#6c5ce7', color: '#6c5ce7' }}
              />
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Description */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#6c5ce7', fontWeight: 600 }}>
                Description
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {content.description}
              </Typography>
            </Box>

            {/* Agenda */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#6c5ce7', fontWeight: 600 }}>
                Meeting Agenda
              </Typography>
              <List dense sx={{ pl: 0 }}>
                {content.agenda.map((item, index) => (
                  <ListItem key={index} sx={{ py: 0.5, pl: 0 }}>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: '#6c5ce7',
                          mr: 2,
                          flexShrink: 0
                        }}
                      />
                      {item}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Meeting Minutes */}
            {sessionData.status === 'Completed' && (
              <Box>
                <Typography variant="h6" gutterBottom sx={{ color: '#6c5ce7', fontWeight: 600 }}>
                  Meeting Minutes
                </Typography>
                <List dense sx={{ pl: 0 }}>
                  {content.minutes.map((minute, index) => (
                    <ListItem key={index} sx={{ py: 0.5, pl: 0 }}>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: '#a29bfe',
                            mt: 0.7,
                            mr: 2,
                            flexShrink: 0
                          }}
                        />
                        {minute}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </DialogContent>

          {/* Actions */}
          <DialogActions sx={{ p: 2, justifyContent: 'center' }}>
            <Button 
              onClick={onClose} 
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #6c5ce7, #a29bfe)',
                borderRadius: 2,
                px: 4,
                py: 1,
                textTransform: 'none',
                fontWeight: 600
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default SessionDetailPopup;
