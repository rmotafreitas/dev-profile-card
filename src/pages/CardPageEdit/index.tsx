import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserProps } from "../../@types/user";
import { Card } from "../../components/Card";
import { LoadingCircle } from "../../components/LoadingCircle";
import { getUserByUrl } from "../../utils";
import { TextInput } from "../../components/InputComponents";

interface InputTypes {
    type: string;
    pointer: string;
    label: string;
}

const model = {
    userUsername: {
        label: "Username",
        type: "text",
        pointer: "user.username",
    },
    userRole: {
        label: "Job",
        type: "text",
        pointer: "user.role",
    },
    description: {
        label: "Description",
        type: "text",
        pointer: "description",
    },
    email: {
        label: "Contact",
        type: "text",
        pointer: "email",
    }
}

export function CardPageEdit() {
    const [user, setUser] = useState<UserProps | null>(null);
    const originalUser = useRef<UserProps | null>(user)
    const isAuthed = true;
    const username = "rmotafreitas";

    async function awakeUser(): Promise<void> {
        originalUser.current = await getUserByUrl(username); 
        setUser(originalUser.current); 
    }

    useEffect(() => {
        awakeUser();
    }, []);

    function getObjectLiteralsRecursion(object: any, field: string): any {
        let value: any = undefined;
        if (!object) return undefined;
        if (field.split(".").length > 0) {
            if (field.split(".").length != 1) {
                value = getObjectLiteralsRecursion(object[field.split(".")[0]], 
                    field.split(".").slice(1).join("."));
            } else {
                value = object[field];
            } 
        }
        return value;
    }

   function setObjectLiteralsRecursion(object: any, field: string, newValue: any): boolean {
       let value: boolean = false;
       if (!object) return false;
       if (field.split(".").length > 0) {
           if (field.split(".").length != 1) {
               value = setObjectLiteralsRecursion(object[field.split(".")[0]], 
                   field.split(".").slice(1).join("."), newValue);
           } else {
               console.log(object[field]);
               object[field] = newValue;
               value = true;
           } 
       }
       return value;
   }
   

    if (isAuthed) {
        return (
            user != null ? (
                <main className="flex flex-row justify-around items-center w-screen">
                    <section className="w-96">
                        {
                            Object.keys(model).map((key: string) => {
                                const value: InputTypes = model[key as keyof typeof model];
                                const d = getObjectLiteralsRecursion(user, value.pointer);
                                switch (value.type) {
                                    case "text":
                                        return (
                                            <TextInput 
                                              key={key}
                                              label={value.label}
                                              defaultValue={d}
                                              onChange={(e) => {
                                               setObjectLiteralsRecursion(user, value.pointer, e.target.value);
                                               setUser({
                                                ...user,
                                               })
                                              }}
                                            />
                                        )
                                    default: 
                                        return (<></>)
                                }
                            })
                        }
                    </section>
                    <div className="w-2 h-screen border-2 bg-white" />
                    <div className="w-96">
                        <Card user={user} />
                    </div>
                </main>
            ) : (
                <LoadingCircle />
            )
        );
    } else {
        const nav = useNavigate();
        return <> { nav("/") } </>
    }

}
