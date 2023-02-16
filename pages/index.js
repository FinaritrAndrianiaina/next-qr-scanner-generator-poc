import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
const QrScan = dynamic(() => import('modern-react-qr-reader'), { ssr: false })


export default function Home() {
  const [data, setData] = useState(null);
  const handleScan = (scannedId) => {
    if (!!scannedId) {
      setData(scannedId);
    }
  }
  return (
    <>
      <div style={{ width: '500px' }}>
        <QrScan
          onScan={handleScan}
          onError={console.error}
        />
        <button onClick={() => setData(null)}>Scan new</button>
        <Link href="/generate">generate</Link>
      </div>
      <p>{data}</p>
    </>
  )
}
