"use client"
import dynamic from 'next/dynamic'
import Link from 'next/link';
import localFont from "next/font/local";

import Main from '@/components/Main';
import Loading from "@/components/Loading"
import Popup from './popup';
import { useEffect, useState } from 'react';

const ScreenSize = dynamic(() => import("@/components/ScreenSize"), { ssr: false, }); // import compent to avoid erro

type DataType = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }
}

export default function page() {
  const [data, setData] = useState<DataType[]>()

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: DataType[] = await response.json();
        setData(data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  if (!data) return <Loading />

  return (<>
    <header className="h-auto p-4 flex gap-4 bg-gray-500">
      <Link href={"/"}>Start</Link>
      <Link href={"/home"}>Home</Link>
      <Link href={"/example/prefinal"}>This</Link>
      <div>
        <span></span>
      </div>
    </header>

    <main className="bg-white text-black w-full h-full">
      <h1>Pre-Final Exam (10%) on Wednesday, 6 Nov 2024</h1>
      <b>Exam overview</b><br />
      <div>You have to fetch a data array (via API) to show in your Next.js page</div>
      {/* 
      Array example:

      const [items, setItems] = useState<Item[]>([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ]);

      const addItem = (name: string) => {
        setItems((prevItems) => [
          ...prevItems,
          { id: prevItems.length + 1, name }, // Add new item with an incremented id
        ]);
      };

      const updateItem = (id: number, newName: string) => {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id ? { ...item, name: newName } : item
          )
        );
      };

      ================================================================
      const [items, setItems] = useState<string[]>([]);

      const addItem = (item: string) => {
        setItems((prevItems) => [...prevItems, item]); // Add new item to array
      };

      const removeItem = (index: number) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index)); // Remove item at index
      };
      */}

      <div>You have to decorate the page with TailwindsCSS</div>
      <div className="p-6 border-4">
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name} {item.username}
            </li>
          ))}
        </ul>
      </div>
      <div>You must set a <u className="font-bold">variable name / a state name</u> as indicated in the exam question, meaning you completely understand how it works.</div>
      {/* 
      state example:
      let variable: type = value;
      ================================================================
      const [state, setState] = useState<Type>(initialValue);
      ================================================================
      const [user, setUser] = useState<{ name: string; email: string }>({
        name: 'John Doe',
        email: 'john.doe@example.com',
      });
      
      ================================================================
      const updateUserName = (newName: string) => {
        setUser((prevUser) => ({ ...prevUser, name: newName }));
      };

      const [items, setItems] = useState<string[]>([]);

      const addItem = (item: string) => {
        setItems((prevItems) => [...prevItems, item]); // Adds item to array
      };

      ================================================================
      const [user, setUser] = useState<{ name: string; address: { city: string } }>({
        name: 'John',
        address: { city: 'New York' },
      });

      const updateCity = (newCity: string) => {
        setUser((prevUser) => ({
          ...prevUser,
          address: { ...prevUser.address, city: newCity },
        }));
      };
      */}
      <div>You must create your page the same (or very similar) to the exam result as much as possible</div>
      <div className="text-red-500 font-bold">More details will be provided on 8.10 AM., 6 Nov 2024</div>
      <br />
      <b>Exam Conditions</b><br />

      <div>Failed to run or error screen on the result will <span className="text-red-500 font-bold">get 0% from 10% automatically</span></div>
      <div>You can choose to use your computer or computer in the laboratory</div>
      <div>Any offline documents, localhost, TailwindsCSS, and exam document web links can open. However, you
        <span className="text-red-500 font-bold underline"> DO NOT </span>
        have permission to use any search engine or a Gen AI tool, e.g., ChatGPT. Open any websites that are not allowed to view is considered cheating and will
        <span className="text-red-500 font-bold underline"> get 0% automatically.</span>
      </div>
      <div>Exam starting from 8:15 - 9:45 (90 minutes)</div>

      <b>Required Knowledge</b><br />

      <div>TailwindsCSS</div>


      <div>Array management & JSON</div>
      {/* 
      let fruits: string[] = ["Apple", "Banana", "Cherry"];

      // Adding items
      fruits.push("Mango"); // Adds Mango to the end of the array
      fruits.unshift("Grapes"); // Adds Grapes to the beginning of the array

      // Removing items
      fruits.pop(); // Removes the last item ("Mango")
      fruits.shift(); // Removes the first item ("Grapes")

      console.log(fruits); // ["Banana", "Cherry"]
      ================================================================

      let numbers: number[] = [1, 2, 3, 4, 5, 6];

      // Using .filter() to get even numbers
      const evenNumbers = numbers.filter((num) => num % 2 === 0);

      console.log(evenNumbers); // [2, 4, 6]
      ================================================================
      JSON.parse() to convert that string into a JavaScript object.
      const jsonString = '{"name": "John", "age": 30, "email": "john@example.com"}';

      const parsedData = JSON.parse(jsonString);

      console.log(parsedData.name); // "John"
      console.log(parsedData.age); // 30

      // Convert JavaScript object to JSON string
      const jsonString = JSON.stringify(user);

      const storedData = JSON.parse(localStorage.getItem("user") as string);

      // Parsing the JSON string into an array of objects
      const users = JSON.parse(jsonString);

      // Filtering the active users
      const activeUsers = users.filter((user: { active: boolean }) => user.active);
      ================================================================

      // Add a new user
      const addUser = (name: string) => {
        const newUser = { id: Date.now(), name, active: true };
        setUsers([...users, newUser]);
      };

      // Deactivate a user
      const deactivateUser = (id: number) => {
        setUsers(users.map(user => (user.id === id ? { ...user, active: false } : user)));
      };
      */}

      <div>map</div>
      {/* 
      {data.map((item, index) => (
        <li key={index}>
          The number at index {index} is {item.value}
        </li>
      ))}
      */}

      <div>JSX</div>

      <div>React state</div>
      <div>React hooks (useState, useEffect)</div>
      {/* 
      const [state, setState] = useState<*DataType>(initialValue);

      const [count, setCount] = useState(0);

      const increment = () => {
        setCount(count + 1); // Update the state
      };

      const decrement = () => {
        setCount(count - 1); // Update the state
      };
      ================================================================
      useEffect(() => {
        // Code to run after render
        return () => {
          // Cleanup code (optional)
        };
      }, [*dependencies]); // Optional dependency array

      const [seconds, setSeconds] = useState(0);

      useEffect(() => {
        // Set up an interval when the component mounts
        const interval = setInterval(() => {
          setSeconds(prev => prev + 1);
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
      }, []); // Empty dependency array means it runs only once (on mount)
      ================================================================
      useState: For managing state in functional components.
      useEffect: For handling side effects, like fetching data or subscribing to events.
      useContext: For consuming values from React Context.
      useReducer: For more complex state logic that involves actions and state transitions.
      useRef: For accessing DOM elements or storing mutable values that don’t cause re-renders.
      useCallback: For memoizing functions to avoid unnecessary re-creations.
      */}
      <div>FetchAPI / async-await</div>
      {/* 
      fetch(url, options)
        .then(response => response.json())  // Convert the response to JSON
        .then(data => console.log(data))    // Handle the data
        .catch(error => console.error(error)); // Catch any errors

      ================================================================
      const fetchData = async () => {
        try {
          const response = await fetch(url);  // Wait for the fetch to complete
          if (!response.ok) {  // Check if the response is successful (status code 200-299)
            throw new Error('Network response was not ok');
          }
          const data = await response.json();  // Wait for the response body to be parsed as JSON
          console.log(data);  // Handle the data
        } catch (error) {
          console.error('Fetch error:', error);  // Handle any errors
        }
      ================================================================
      useEffect(() => {
        const fetchUsers = async () => {
          try {
            // Start the fetch request
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }

            // Parse the response as JSON
            const data: User[] = await response.json();

            // Update state with the fetched users
            setUsers(data);
          } catch (error) {
            // If an error occurs, update the error state
            setError(error.message);
          } finally {
            // Set loading to false when the request completes
            setLoading(false);
          }
        };

        fetchUsers();
      }, []);
      ================================================================
      const createUser = async (user: { name: string; email: string }) => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',  // Specify content type
            },
            body: JSON.stringify(user),  // Send user data as JSON
          });

          if (!response.ok) {
            throw new Error('Failed to create user');
          }

          const newUser = await response.json();
          console.log('User created:', newUser);
        } catch (error) {
          console.error('Error:', error);
        }
      };

      // Example usage
      createUser({ name: 'John Doe', email: 'john.doe@example.com' });
      ================================================================
      const deleteUser = async (userId: number) => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            method: 'DELETE',
          });

          if (!response.ok) {
            throw new Error('Failed to delete user');
          }

          console.log('User deleted successfully');
        } catch (error) {
          console.error('Error:', error);
        }
      };

      // Example usage
      deleteUser(1);  // Delete user with ID 1
      ================================================================
      const fetchData = async () => {
        try {
          const [usersResponse, postsResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/posts')
          ]);

          if (!usersResponse.ok || !postsResponse.ok) {
            throw new Error('Failed to fetch data from one or more APIs');
          }

          const users = await usersResponse.json();
          const posts = await postsResponse.json();

          console.log('Users:', users);
          console.log('Posts:', posts);
        } catch (error) {
          console.error('Error:', error);
        }
      };

      fetchData();
      ================================================================
      */}

      <b className="text-blue-500">Caution:</b><br />
      <span className="text-red-500 font-bold">When I check your result, if the page does not show anything, or only static text or any error on the web browser screen, you will get 0% of the exam score.</span>
      Please practice your homework by yourself.
      <ScreenSize />
      <Popup
        message={""}
        type={0}
        visible={false}
      />
      <Main />
    </main>
    <footer></footer>
  </>
  )
}