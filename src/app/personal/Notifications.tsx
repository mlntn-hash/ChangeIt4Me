"use client";

interface Notification {
  id: number;
  title: string;
  text: string;
  unread?: boolean;
}

const notifications: Notification[] = [
  { id: 1, title: "Help Center", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.", unread: true },
  { id: 2, title: "Help Center", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.", unread: true },
  { id: 3, title: "Help Center", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.", unread: true },
  { id: 4, title: "Help Center", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.", unread: false },
];

export default function Notifications() {
  return (
    <div className="bg-white rounded-lg p-6">
      <h1 className="text-[36px] font-medium mb-4 border-b border-gray-300 pb-2">
        Notifications
      </h1>

      <div className="divide-y divide-gray-300">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="flex items-center justify-between py-4"
          >
            <div>
              <p className="font-medium text-[18px]">{n.title}</p>
              <p className="text-[#181818] font-thin text-[15px]">{n.text}</p>
            </div>
            {n.unread && (
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
