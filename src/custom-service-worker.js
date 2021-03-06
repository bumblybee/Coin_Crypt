const publicVapidKey =
  "BPrvvwwHG8R5d3wTfIEA52unQslAUC8Uv7kkIerNbdV7XV__k-DbKpm9d1SrjPQ110FIm1W8fCC7o9KA_GU_g60";

// export async function sendPriceNotification(registration) {
//   const subscription = await registration.pushManager.subscribe({
//     userVisibleOnly: true,
//     applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
//   });

//   await fetch("http://localhost:7777/price-notify", {
//     method: "POST",
//     body: JSON.stringify(subscription),
//     headers: {
//       "content-type": "application/json",
//     },
//   });
// }

export async function subscribePush(userData) {
  const registration = await navigator.serviceWorker.ready;
  if (!registration || !registration.pushManager) {
    return;
  }

  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  });

  await fetch("http://localhost:7777/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json",
    },
  });

  return subscription;
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
