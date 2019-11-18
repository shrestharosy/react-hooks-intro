import React, { useState, useEffect } from 'react';

const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null
};

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  const [location, setLocation] = useState(initialLocationState);

  //   Destructuring
  //   const [{latitude, longitude,speed}, setLocation] = useState(initialLocationState);

  let mounted = true;

  //   useEffect(() => {
  //     document.title = count;
  //   });

  useEffect(() => {
    document.title = count;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    navigator.geolocation.getCurrentPosition(handleGeoLocation);
    // id of our listener
    const watchId = navigator.geolocation.watchPosition(handleGeoLocation);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      navigator.geolocation.clearWatch(watchId);
      mounted = false;
    };
  }, [count]);

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  };

  const handleOnline = () => {
    setOnlineStatus(true);
  };

  const handleOffline = () => {
    setOnlineStatus(false);
  };

  const handleGeoLocation = event => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed
      });
    }
  };

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Counter Function</h1>
      {count}
      <br />
      <br />
      <button onClick={incrementCount}>Increment</button>

      <h1>Mouse Position</h1>
      <p>X position : {mousePosition.x}</p>
      <p>Y position : {mousePosition.y}</p>

      <h1>Status</h1>
      <p>{onlineStatus ? 'Online' : 'Offline'}</p>

      <h1>Geolocation</h1>
      <p>Latitude : {location.latitude}</p>
      <p>Longitude : {location.longitude}</p>
      <p>Speed: {location.speed}</p>
    </div>
  );
};

export default CounterFunction;
