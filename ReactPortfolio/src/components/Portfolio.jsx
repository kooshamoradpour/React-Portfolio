import { Card, CardBody, CardFooter, Image } from "@heroui/react";


export default function App() {
  const list = [
    {
    title: "Vehicle-Builder",
      link:"https://github.com/kooshamoradpour/Vehicle-Builder",
      img: "./img/vehicle-builder.png"
    },
    {
      title: "Employee-Tracker",
      link: "https://github.com/kooshamoradpour/Employee-Tracker",
      img: "/img/employee-tracker.png"
    },
    {
      title: "Weather-Dashboard",
      link: "https://github.com/kooshamoradpour/Weather-Dashboard",
      img: "https://via.placeholder.com/150"
    },
    {
      title: "National-Park-API",
      link: "https://github.com/kooshamoradpour/national-park-api",
      img: "https://via.placeholder.com/150"
    },
    {
      title: "Professional-README-Generator",
      link: "https://github.com/kooshamoradpour/Professional-README-Generator",
      img: "https://via.placeholder.com/150"
    },
    {
      title: "War-Game-KM",
      link: "https://github.com/kooshamoradpour/War-game-km",
      img: "https://via.placeholder.com/150"
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card key={index} isPressable shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              <b>{item.title}</b>
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
