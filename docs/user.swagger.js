export const getAllUsers = {
  security: {
    jwt: []
  },
  tags: ['User'],
  description: 'This route allow you to get all users data',
  opeationId: 'getAllUsers',
  parameters: [
    {
      in: 'query',
      name: 'filter',
      type: 'string',
      example: 'admin',
      description:
        'This will filter all users and select only user that contain the word you insert and search in all user fields about this word'
    },
    {
      in: 'query',
      name: 'select',
      type: 'string',
      example: 'name, profileImage',
      description: 'Select only fields you want.'
    },
    {
      in: 'query',
      name: 'limit',
      type: 'string',
      example: '5',
      description:
        'Limit the number of users from for example 20 user to 5 users.'
    },
    {
      in: 'query',
      name: 'sort',
      type: 'string',
      example: 'name',
      description:
        'Sorting users according to specified field for example the name field.'
    },
    {
      in: 'query',
      name: 'page',
      type: 'string',
      example: '2',
      description:
        'When number of user is greater than 10 users, it divides into pages each page contain 10 users.'
    }
  ],
  responses: {
    200: {
      description: 'Get All Users',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Success'
              },
              message: {
                type: 'string',
                example: 'Users Found Successfully.'
              },
              users: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611d08a62fc210a30ecfb75b'
                    },
                    role: {
                      type: 'string',
                      example: 'admin'
                    },
                    isEmailVerified: {
                      type: 'boolean',
                      example: true
                    },
                    favoriteProducts: {
                      type: 'array',
                      items: {
                        type: 'string',
                        example: '6123dab951ff329fed1bc794'
                      }
                    },
                    name: {
                      type: 'string',
                      example: 'Admin'
                    },
                    username: {
                      type: 'string',
                      example: 'admin'
                    },
                    email: {
                      type: 'string',
                      example: 'admin@ecommerce.com'
                    },
                    companyName: {
                      type: 'string',
                      example: ''
                    },
                    address: {
                      type: 'string',
                      example: 'Toukh - Egypt'
                    },
                    phone: {
                      type: 'string',
                      example: '11111111111'
                    },
                    profileImage: {
                      type: 'string',
                      example:
                        'https://res.cloudinary.com/dknma8cck/image/upload/v1629292710/EcommerceAPI/Users/admin/vt3wgvwvwv4s6d1e81lr.webp'
                    },
                    profileImageId: {
                      type: 'string',
                      example: 'EcommerceAPI/Users/admin/vt3wgvwvwv4s6d1e81lr'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const getUser = {
  security: {
    jwt: []
  },
  tags: ['User'],
  description: "This route allow you to get users using it's ID",
  opeationId: 'getUser',
  parameters: [
    {
      in: 'path',
      name: 'id',
      type: 'integer',
      description: 'User ID'
    }
  ],
  responses: {
    200: {
      description: 'Get User',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Success'
              },
              message: {
                type: 'string',
                example: 'Found User Successfully.'
              },
              users: {
                type: 'object',
                properties: {
                  _id: {
                    type: 'string',
                    example: '611d08a62fc210a30ecfb75b'
                  },
                  role: {
                    type: 'string',
                    example: 'admin'
                  },
                  isEmailVerified: {
                    type: 'boolean',
                    example: true
                  },
                  favoriteProducts: {
                    type: 'array',
                    items: {
                      type: 'string',
                      example: '6123dab951ff329fed1bc794'
                    }
                  },
                  name: {
                    type: 'string',
                    example: 'Admin'
                  },
                  username: {
                    type: 'string',
                    example: 'admin'
                  },
                  email: {
                    type: 'string',
                    example: 'admin@ecommerce.com'
                  },
                  companyName: {
                    type: 'string',
                    example: ''
                  },
                  address: {
                    type: 'string',
                    example: 'Toukh - Egypt'
                  },
                  phone: {
                    type: 'string',
                    example: '11111111111'
                  },
                  profileImage: {
                    type: 'string',
                    example:
                      'https://res.cloudinary.com/dknma8cck/image/upload/v1629292710/EcommerceAPI/Users/admin/vt3wgvwvwv4s6d1e81lr.webp'
                  },
                  profileImageId: {
                    type: 'string',
                    example: 'EcommerceAPI/Users/admin/vt3wgvwvwv4s6d1e81lr'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const addUser = {
  tags: ['User'],
  description: 'This route allow only admin to add new user',
  opeationId: 'addUser',
  requestBody: {
    required: true,
    content: {
      'multipart/form-data': {
        schema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              required: true
            },
            username: {
              type: 'string',
              required: true
            },
            email: {
              type: 'string',
              required: true
            },
            password: {
              type: 'string',
              required: true
            },
            passwordConfirmation: {
              type: 'string',
              required: true
            },
            role: {
              type: 'string',
              required: true
            },
            image: {
              type: 'string',
              format: 'image',
              required: true
            },
            phone: {
              type: 'string'
            },
            address: {
              type: 'string'
            },
            companyName: {
              type: 'string'
            }
          }
        }
      }
    }
  },
  responses: {
    201: {
      description: 'Add new user',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Success'
              },
              message: {
                type: 'string',
                example: 'Account Created Successfully.'
              },
              catagory: {
                type: 'object',
                properties: {
                  role: {
                    type: 'string',
                    example: 'user'
                  },
                  isEmailVerified: {
                    type: 'boolean',
                    example: false
                  },
                  favoriteProducts: {
                    type: 'array',
                    items: {
                      type: 'string'
                    }
                  },
                  _id: {
                    type: 'string',
                    example: '6123f6756874853c161ec5b9'
                  },
                  name: {
                    type: 'string',
                    example: 'armar'
                  },
                  username: {
                    type: 'string',
                    example: 'armar'
                  },
                  email: {
                    type: 'string',
                    example: 'armar@gmail.com'
                  },
                  companyName: {
                    type: 'string',
                    example: ''
                  },
                  phone: {
                    type: 'string',
                    example: ''
                  },
                  address: {
                    type: 'string',
                    example: ''
                  },
                  profileImage: {
                    type: 'string',
                    example:
                      'https://res.cloudinary.com/dknma8cck/image/upload/v1629746804/EcommerceAPI/Users/armar/cmt6rf3l45rs0lqaviq7.webp'
                  },
                  profileImageId: {
                    type: 'string',
                    example: 'EcommerceAPI/Users/armar/cmt6rf3l45rs0lqaviq7'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};