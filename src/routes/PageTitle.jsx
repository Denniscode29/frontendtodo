import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTitle() {
    const location = useLocation();

    useEffect(() => {
        const titles = {
            "/": "Home",
            "/about": "About",
            "/contact": "Contact",
            "/login": "Login",
            "/register": "Register",
            "/dashboard": "Dashboard",
            "/todo-list": "Todo List",
            "/todo-list-detail": "Todo List Detail",
            "/setting": "Setting",
            "/plans": "Plans",
        };

        document.title = titles[location.pathname] || "TodoBee";
    }, [location]);

    return null;
};

export default PageTitle;