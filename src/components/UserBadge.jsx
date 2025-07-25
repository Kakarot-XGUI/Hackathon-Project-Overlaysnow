// CLerk authentication User Badge

import { useUser } from "@clerk/clerk-react";

const UserBadge = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="flex items-center gap-2">
      <img
        src={user.imageUrl}
        alt="User avatar"
        className="w-8 h-8 rounded-full"
      />
      <span className="text-sm font-medium">{user.fullName || user.username}</span>
    </div>
  );
};

export default UserBadge;