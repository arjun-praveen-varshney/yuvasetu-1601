import { Outlet } from 'react-router-dom';

export const EmployerLayout = () => {
  return (
    <div 
      className="contents" 
      style={{ 
        // @ts-ignore - CSS variables are valid but TS might complain
        "--primary": "174 72% 40%", // Overriding primary blue to employer green matches --employer var
        "--primary-foreground": "0 0% 100%",
        "--ring": "174 72% 40%",
      } as React.CSSProperties}
    >
      <Outlet />
    </div>
  );
};
