import React, { useState, useEffect } from 'react';

export interface User {
  name: string;
  surname: string;
  id: string;
  age: number;
  type: 'REGULAR' | 'ADMIN';
  adminId?: string;
}

const User = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    (async function() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/user');
        setUser(response);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    })();
  }, []);

  const renderTypeFields = () => {
    switch (true) {
      case user.type.toLowerCase() == 'regular':
        return null;
      case user.type.toLowerCase() == 'admin':
        return (
          <div>
            <div>
              Admin user id:
            </div>
            <div>
              {user.adminId}
            </div>
          </div>
        );
    }
  };

  if (isLoading) {
    return <div>Loading, please wait...</div>;
  }

  return (
    <section>
      <h1>
        User details
      </h1>
      <div>
        <div>
          Name:
        </div>
        <div>
          {user.surname}
        </div>
      </div>
      <div>
        <div>
          Surname:
        </div>
        <div>
          {user.name}
        </div>
      </div>
      <div>
        <div>
          Age:
        </div>
        <div>
          {user.age}
        </div>
      </div>
      {renderTypeFields()}
    </section>
  );
};

