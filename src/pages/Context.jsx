import React from "react";

import { createContext } from "react";

export const AppContext = createContext(null);

function Context({children
}){
const user ="SHAAM";

return(
<AppContext.Provider value={user}>
    {children}
</AppContext.Provider>
);
}

