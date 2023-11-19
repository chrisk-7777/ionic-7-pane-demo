import { CupertinoPane } from 'cupertino-pane';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useRef } from 'react';

import './Tab1.css';

const Tab1: React.FC = () => {

  const panelRef = useRef<HTMLDivElement>(null);
  const myPane = useRef<CupertinoPane>();

  useEffect(() => {
    // Uncomment to prevent error
    // (document.querySelector('ion-app') as any).componentOnReady = () => {};

    myPane.current = new CupertinoPane(panelRef.current!, {
      parentElement: 'ion-app',
      initialBreak: 'top',
      breaks: {
        top: { enabled: true, height: 410 },
        middle: { enabled: false },
        bottom: { enabled: false },
      },
      showDraggable: false,
    });

    return () => {
      myPane.current?.destroy();
    };
  }, []);

  const openRecord = () => {
    myPane.current?.present({ animate: true });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <button onClick={openRecord}>Open pane</button>
        <div ref={panelRef}>
          Hello, world!
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
