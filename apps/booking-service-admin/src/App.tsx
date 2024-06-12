import React, { useEffect, useState } from "react";
import { Admin, DataProvider } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { MeetingList } from "./meeting/MeetingList";
import { MeetingCreate } from "./meeting/MeetingCreate";
import { MeetingEdit } from "./meeting/MeetingEdit";
import { MeetingShow } from "./meeting/MeetingShow";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
import { AvailabilityList } from "./availability/AvailabilityList";
import { AvailabilityCreate } from "./availability/AvailabilityCreate";
import { AvailabilityEdit } from "./availability/AvailabilityEdit";
import { AvailabilityShow } from "./availability/AvailabilityShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { auth0AuthProvider } from "./auth-provider/ra-auth-auth0";

const history = createHistory();

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: DataProvider) => {
        setDataProvider(() => provider);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Admin
          history={history}
          title={"BookingService"}
          dataProvider={dataProvider}
          authProvider={auth0AuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
        >
          <Resource
            name="Payment"
            list={PaymentList}
            edit={PaymentEdit}
            create={PaymentCreate}
            show={PaymentShow}
          />
          <Resource
            name="Meeting"
            list={MeetingList}
            edit={MeetingEdit}
            create={MeetingCreate}
            show={MeetingShow}
          />
          <Resource
            name="Booking"
            list={BookingList}
            edit={BookingEdit}
            create={BookingCreate}
            show={BookingShow}
          />
          <Resource
            name="Availability"
            list={AvailabilityList}
            edit={AvailabilityEdit}
            create={AvailabilityCreate}
            show={AvailabilityShow}
          />
          <Resource
            name="User"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
        </Admin>
      </BrowserRouter>
    </div>
  );
};

export default App;
