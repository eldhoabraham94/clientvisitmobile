import { useState, useEffect } from 'react';
import timelineData from '../data/timelineData.json';

// Custom hook to manage timeline data
export const useTimelineData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Simulate loading delay for better UX (can be removed in production)
      const loadData = async () => {
        setLoading(true);
        
        // Validate the data structure
        if (!timelineData.timeline || !timelineData.timeline.days || !timelineData.timeline.events) {
          throw new Error('Invalid timeline data structure');
        }

        // Set the data after a brief delay
        setTimeout(() => {
          setData(timelineData.timeline);
          setLoading(false);
        }, 100);
      };

      loadData();
    } catch (err) {
      setError(err.message);
      setLoading(false);
      
      // Fallback to minimal data structure if JSON fails
      setData({
        days: [
          { id: 0, date: '7 Sep', day: 'Sun', icon: 'truck' },
          { id: 1, date: '8 Sep', day: 'Mon', icon: 'truck' },
          { id: 2, date: '9 Sep', day: 'Tue', icon: 'truck' },
          { id: 3, date: '10 Sep', day: 'Wed', icon: 'truck' },
          { id: 4, date: '11 Sep', day: 'Thu', icon: 'truck' },
        ],
        events: {
          0: { title: 'Day 1', subtitle: 'Events', events: [] },
          1: { title: 'Day 2', subtitle: 'Events', events: [] },
          2: { title: 'Day 3', subtitle: 'Events', events: [] },
          3: { title: 'Day 4', subtitle: 'Events', events: [] },
          4: { title: 'Day 5', subtitle: 'Events', events: [] },
        }
      });
    }
  }, []);

  return { data, loading, error };
};

export default useTimelineData;
