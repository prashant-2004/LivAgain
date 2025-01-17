// export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJkMjdhOTQ2MC0zNWJhLTQ4NGEtYTM4My0wYTMwYTFkZTMwOTciLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIiwiYXNrX2pvaW4iXSwiaWF0IjoxNzM3MTE0OTA5LCJleHAiOjE3MzcxMTQ5Njl9.avV3XKJaewuS0qPusBXo6V8Ov5isMNwf5UHruxBBWqY";
// API call to create meeting

export const tokenProvider = {
  get token() {
    return (async () => {
      try {
        const res = await fetch(`http://192.168.1.10:9000/get-token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}), // Optional if roomId/peerId are not required
        });
        if (!res.ok) {
          throw new Error(`HTTP Error! status: ${res.status}`);
        }
        const { token } = await res.json();
        return token;
      } catch (err) {
        console.error("Error fetching token:", err.message);
        throw err; // Re-throw the error for further debugging
      }
    })();
  },
};



export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  console.log("MEETING creating,",res);
  const { roomId } = await res.json();
  return roomId;
};