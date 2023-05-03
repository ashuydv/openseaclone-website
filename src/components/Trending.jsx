import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import TableOne from "./TableOne";
import TableTwo from "./TableTwo";

export default function Trending() {
  const data = [
    {
      label: "Trending",
      value: "trending",
      component: <TableOne/>,
    },
    {
      label: "Top",
      value: "top",
      component: <TableTwo/>,
    },
  ];

  return (
    <section className="bg-gray-100">
      <div className="container py-12">
        <Tabs value="html">
          <TabsHeader className="bg-transparent">
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                className=" w-auto font-semibold text-xl mr-4"
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, component }) => (
              <TabPanel key={value} value={value}>
                {component}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </section>
  );
}
