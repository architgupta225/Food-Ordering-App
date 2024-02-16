"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@auth";
exports.ids = ["vendor-chunks/@auth"];
exports.modules = {

/***/ "(rsc)/./node_modules/@auth/mongodb-adapter/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@auth/mongodb-adapter/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MongoDBAdapter: () => (/* binding */ MongoDBAdapter),\n/* harmony export */   _id: () => (/* binding */ _id),\n/* harmony export */   defaultCollections: () => (/* binding */ defaultCollections),\n/* harmony export */   format: () => (/* binding */ format)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/**\n * <div style={{display: \"flex\", justifyContent: \"space-between\", alignItems: \"center\", padding: 16}}>\n *  <p style={{fontWeight: \"normal\"}}>Official <a href=\"https://www.mongodb.com\">MongoDB</a> adapter for Auth.js / NextAuth.js.</p>\n *  <a href=\"https://www.mongodb.com\">\n *   <img style={{display: \"block\"}} src=\"https://authjs.dev/img/adapters/mongodb.svg\" width=\"30\" />\n *  </a>\n * </div>\n *\n * ## Installation\n *\n * ```bash npm2yarn\n * npm install @auth/mongodb-adapter mongodb\n * ```\n *\n * @module @auth/mongodb-adapter\n */ \nconst defaultCollections = {\n    Users: \"users\",\n    Accounts: \"accounts\",\n    Sessions: \"sessions\",\n    VerificationTokens: \"verification_tokens\"\n};\nconst format = {\n    /** Takes a mongoDB object and returns a plain old JavaScript object */ from (object) {\n        const newObject = {};\n        for(const key in object){\n            const value = object[key];\n            if (key === \"_id\") {\n                newObject.id = value.toHexString();\n            } else if (key === \"userId\") {\n                newObject[key] = value.toHexString();\n            } else {\n                newObject[key] = value;\n            }\n        }\n        return newObject;\n    },\n    /** Takes a plain old JavaScript object and turns it into a mongoDB object */ to (object) {\n        const newObject = {\n            _id: _id(object.id)\n        };\n        for(const key in object){\n            const value = object[key];\n            if (key === \"userId\") newObject[key] = _id(value);\n            else if (key === \"id\") continue;\n            else newObject[key] = value;\n        }\n        return newObject;\n    }\n};\n/** @internal */ function _id(hex) {\n    if (hex?.length !== 24) return new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId();\n    return new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(hex);\n}\n/**\n * ## Setup\n *\n * The MongoDB adapter does not handle connections automatically, so you will have to make sure that you pass the Adapter a `MongoClient` that is connected already. Below you can see an example how to do this.\n *\n * ### Add the MongoDB client\n *\n * ```ts\n * // This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n * import { MongoClient } from \"mongodb\"\n *\n * if (!process.env.MONGODB_URI) {\n *   throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"')\n * }\n *\n * const uri = process.env.MONGODB_URI\n * const options = {}\n *\n * let client\n * let clientPromise: Promise<MongoClient>\n *\n * if (process.env.NODE_ENV === \"development\") {\n *   // In development mode, use a global variable so that the value\n *   // is preserved across module reloads caused by HMR (Hot Module Replacement).\n *   if (!global._mongoClientPromise) {\n *     client = new MongoClient(uri, options)\n *     global._mongoClientPromise = client.connect()\n *   }\n *   clientPromise = global._mongoClientPromise\n * } else {\n *   // In production mode, it's best to not use a global variable.\n *   client = new MongoClient(uri, options)\n *   clientPromise = client.connect()\n * }\n *\n * // Export a module-scoped MongoClient promise. By doing this in a\n * // separate module, the client can be shared across functions.\n * export default clientPromise\n * ```\n *\n * ### Configure Auth.js\n *\n * ```js\n * import NextAuth from \"next-auth\"\n * import { MongoDBAdapter } from \"@auth/mongodb-adapter\"\n * import clientPromise from \"../../../lib/mongodb\"\n *\n * // For more information on each option (and a full list of options) go to\n * // https://authjs.dev/reference/providers/oauth\n * export default NextAuth({\n *   adapter: MongoDBAdapter(clientPromise),\n *   ...\n * })\n * ```\n **/ function MongoDBAdapter(client, options = {}) {\n    const { collections } = options;\n    const { from, to } = format;\n    const db = (async ()=>{\n        const _db = (await client).db(options.databaseName);\n        const c = {\n            ...defaultCollections,\n            ...collections\n        };\n        return {\n            U: _db.collection(c.Users),\n            A: _db.collection(c.Accounts),\n            S: _db.collection(c.Sessions),\n            V: _db.collection(c?.VerificationTokens)\n        };\n    })();\n    return {\n        async createUser (data) {\n            const user = to(data);\n            await (await db).U.insertOne(user);\n            return from(user);\n        },\n        async getUser (id) {\n            const user = await (await db).U.findOne({\n                _id: _id(id)\n            });\n            if (!user) return null;\n            return from(user);\n        },\n        async getUserByEmail (email) {\n            const user = await (await db).U.findOne({\n                email\n            });\n            if (!user) return null;\n            return from(user);\n        },\n        async getUserByAccount (provider_providerAccountId) {\n            const account = await (await db).A.findOne(provider_providerAccountId);\n            if (!account) return null;\n            const user = await (await db).U.findOne({\n                _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(account.userId)\n            });\n            if (!user) return null;\n            return from(user);\n        },\n        async updateUser (data) {\n            const { _id, ...user } = to(data);\n            const result = await (await db).U.findOneAndUpdate({\n                _id\n            }, {\n                $set: user\n            }, {\n                returnDocument: \"after\"\n            });\n            return from(result);\n        },\n        async deleteUser (id) {\n            const userId = _id(id);\n            const m = await db;\n            await Promise.all([\n                m.A.deleteMany({\n                    userId: userId\n                }),\n                m.S.deleteMany({\n                    userId: userId\n                }),\n                m.U.deleteOne({\n                    _id: userId\n                })\n            ]);\n        },\n        linkAccount: async (data)=>{\n            const account = to(data);\n            await (await db).A.insertOne(account);\n            return account;\n        },\n        async unlinkAccount (provider_providerAccountId) {\n            const account = await (await db).A.findOneAndDelete(provider_providerAccountId);\n            return from(account);\n        },\n        async getSessionAndUser (sessionToken) {\n            const session = await (await db).S.findOne({\n                sessionToken\n            });\n            if (!session) return null;\n            const user = await (await db).U.findOne({\n                _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(session.userId)\n            });\n            if (!user) return null;\n            return {\n                user: from(user),\n                session: from(session)\n            };\n        },\n        async createSession (data) {\n            const session = to(data);\n            await (await db).S.insertOne(session);\n            return from(session);\n        },\n        async updateSession (data) {\n            const { _id, ...session } = to(data);\n            const updatedSession = await (await db).S.findOneAndUpdate({\n                sessionToken: session.sessionToken\n            }, {\n                $set: session\n            }, {\n                returnDocument: \"after\"\n            });\n            return from(updatedSession);\n        },\n        async deleteSession (sessionToken) {\n            const session = await (await db).S.findOneAndDelete({\n                sessionToken\n            });\n            return from(session);\n        },\n        async createVerificationToken (data) {\n            await (await db).V.insertOne(to(data));\n            return data;\n        },\n        async useVerificationToken (identifier_token) {\n            const verificationToken = await (await db).V.findOneAndDelete(identifier_token);\n            if (!verificationToken) return null;\n            const { _id, ...rest } = verificationToken;\n            return rest;\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQGF1dGgvbW9uZ29kYi1hZGFwdGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztDQWVDLEdBQ2tDO0FBQzVCLE1BQU1DLHFCQUFxQjtJQUM5QkMsT0FBTztJQUNQQyxVQUFVO0lBQ1ZDLFVBQVU7SUFDVkMsb0JBQW9CO0FBQ3hCLEVBQUU7QUFDSyxNQUFNQyxTQUFTO0lBQ2xCLHFFQUFxRSxHQUNyRUMsTUFBS0MsTUFBTTtRQUNQLE1BQU1DLFlBQVksQ0FBQztRQUNuQixJQUFLLE1BQU1DLE9BQU9GLE9BQVE7WUFDdEIsTUFBTUcsUUFBUUgsTUFBTSxDQUFDRSxJQUFJO1lBQ3pCLElBQUlBLFFBQVEsT0FBTztnQkFDZkQsVUFBVUcsRUFBRSxHQUFHRCxNQUFNRSxXQUFXO1lBQ3BDLE9BQ0ssSUFBSUgsUUFBUSxVQUFVO2dCQUN2QkQsU0FBUyxDQUFDQyxJQUFJLEdBQUdDLE1BQU1FLFdBQVc7WUFDdEMsT0FDSztnQkFDREosU0FBUyxDQUFDQyxJQUFJLEdBQUdDO1lBQ3JCO1FBQ0o7UUFDQSxPQUFPRjtJQUNYO0lBQ0EsMkVBQTJFLEdBQzNFSyxJQUFHTixNQUFNO1FBQ0wsTUFBTUMsWUFBWTtZQUNkTSxLQUFLQSxJQUFJUCxPQUFPSSxFQUFFO1FBQ3RCO1FBQ0EsSUFBSyxNQUFNRixPQUFPRixPQUFRO1lBQ3RCLE1BQU1HLFFBQVFILE1BQU0sQ0FBQ0UsSUFBSTtZQUN6QixJQUFJQSxRQUFRLFVBQ1JELFNBQVMsQ0FBQ0MsSUFBSSxHQUFHSyxJQUFJSjtpQkFDcEIsSUFBSUQsUUFBUSxNQUNiO2lCQUVBRCxTQUFTLENBQUNDLElBQUksR0FBR0M7UUFDekI7UUFDQSxPQUFPRjtJQUNYO0FBQ0osRUFBRTtBQUNGLGNBQWMsR0FDUCxTQUFTTSxJQUFJQyxHQUFHO0lBQ25CLElBQUlBLEtBQUtDLFdBQVcsSUFDaEIsT0FBTyxJQUFJakIsNkNBQVFBO0lBQ3ZCLE9BQU8sSUFBSUEsNkNB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QUFFWixnQkFBZ0I7WUFBUTtZQUNoSixPQUFPeEMsS0FBS3VEO1FBQ2hCO1FBQ0EsTUFBTUMsZUFBY0wsWUFBWTtZQUM1QixNQUFNQyxVQUFVLE1BQU0sQ0FBQyxNQUFNckMsRUFBQyxFQUFHTyxDQUFDLENBQUMyQixnQkFBZ0IsQ0FBQztnQkFDaERFO1lBQ0o7WUFDQSxPQUFPbkQsS0FBS29EO1FBQ2hCO1FBQ0EsTUFBTUsseUJBQXdCaEMsSUFBSTtZQUM5QixNQUFNLENBQUMsTUFBTVYsRUFBQyxFQUFHUSxDQUFDLENBQUNJLFNBQVMsQ0FBQ3BCLEdBQUdrQjtZQUNoQyxPQUFPQTtRQUNYO1FBQ0EsTUFBTWlDLHNCQUFxQkMsZ0JBQWdCO1lBQ3ZDLE1BQU1DLG9CQUFvQixNQUFNLENBQUMsTUFBTTdDLEVBQUMsRUFBR1EsQ0FBQyxDQUFDMEIsZ0JBQWdCLENBQUNVO1lBQzlELElBQUksQ0FBQ0MsbUJBQ0QsT0FBTztZQUNYLE1BQU0sRUFBRXBELEdBQUcsRUFBRSxHQUFHcUQsTUFBTSxHQUFHRDtZQUN6QixPQUFPQztRQUNYO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmctYXBwLy4vbm9kZV9tb2R1bGVzL0BhdXRoL21vbmdvZGItYWRhcHRlci9pbmRleC5qcz9mZjM0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIHBhZGRpbmc6IDE2fX0+XG4gKiAgPHAgc3R5bGU9e3tmb250V2VpZ2h0OiBcIm5vcm1hbFwifX0+T2ZmaWNpYWwgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1vbmdvZGIuY29tXCI+TW9uZ29EQjwvYT4gYWRhcHRlciBmb3IgQXV0aC5qcyAvIE5leHRBdXRoLmpzLjwvcD5cbiAqICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubW9uZ29kYi5jb21cIj5cbiAqICAgPGltZyBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIn19IHNyYz1cImh0dHBzOi8vYXV0aGpzLmRldi9pbWcvYWRhcHRlcnMvbW9uZ29kYi5zdmdcIiB3aWR0aD1cIjMwXCIgLz5cbiAqICA8L2E+XG4gKiA8L2Rpdj5cbiAqXG4gKiAjIyBJbnN0YWxsYXRpb25cbiAqXG4gKiBgYGBiYXNoIG5wbTJ5YXJuXG4gKiBucG0gaW5zdGFsbCBAYXV0aC9tb25nb2RiLWFkYXB0ZXIgbW9uZ29kYlxuICogYGBgXG4gKlxuICogQG1vZHVsZSBAYXV0aC9tb25nb2RiLWFkYXB0ZXJcbiAqL1xuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb2xsZWN0aW9ucyA9IHtcbiAgICBVc2VyczogXCJ1c2Vyc1wiLFxuICAgIEFjY291bnRzOiBcImFjY291bnRzXCIsXG4gICAgU2Vzc2lvbnM6IFwic2Vzc2lvbnNcIixcbiAgICBWZXJpZmljYXRpb25Ub2tlbnM6IFwidmVyaWZpY2F0aW9uX3Rva2Vuc1wiLFxufTtcbmV4cG9ydCBjb25zdCBmb3JtYXQgPSB7XG4gICAgLyoqIFRha2VzIGEgbW9uZ29EQiBvYmplY3QgYW5kIHJldHVybnMgYSBwbGFpbiBvbGQgSmF2YVNjcmlwdCBvYmplY3QgKi9cbiAgICBmcm9tKG9iamVjdCkge1xuICAgICAgICBjb25zdCBuZXdPYmplY3QgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG9iamVjdFtrZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJfaWRcIikge1xuICAgICAgICAgICAgICAgIG5ld09iamVjdC5pZCA9IHZhbHVlLnRvSGV4U3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09IFwidXNlcklkXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9IHZhbHVlLnRvSGV4U3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgfSxcbiAgICAvKiogVGFrZXMgYSBwbGFpbiBvbGQgSmF2YVNjcmlwdCBvYmplY3QgYW5kIHR1cm5zIGl0IGludG8gYSBtb25nb0RCIG9iamVjdCAqL1xuICAgIHRvKG9iamVjdCkge1xuICAgICAgICBjb25zdCBuZXdPYmplY3QgPSB7XG4gICAgICAgICAgICBfaWQ6IF9pZChvYmplY3QuaWQpLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb2JqZWN0W2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcInVzZXJJZFwiKVxuICAgICAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gX2lkKHZhbHVlKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJpZFwiKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld09iamVjdDtcbiAgICB9LFxufTtcbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBfaWQoaGV4KSB7XG4gICAgaWYgKGhleD8ubGVuZ3RoICE9PSAyNClcbiAgICAgICAgcmV0dXJuIG5ldyBPYmplY3RJZCgpO1xuICAgIHJldHVybiBuZXcgT2JqZWN0SWQoaGV4KTtcbn1cbi8qKlxuICogIyMgU2V0dXBcbiAqXG4gKiBUaGUgTW9uZ29EQiBhZGFwdGVyIGRvZXMgbm90IGhhbmRsZSBjb25uZWN0aW9ucyBhdXRvbWF0aWNhbGx5LCBzbyB5b3Ugd2lsbCBoYXZlIHRvIG1ha2Ugc3VyZSB0aGF0IHlvdSBwYXNzIHRoZSBBZGFwdGVyIGEgYE1vbmdvQ2xpZW50YCB0aGF0IGlzIGNvbm5lY3RlZCBhbHJlYWR5LiBCZWxvdyB5b3UgY2FuIHNlZSBhbiBleGFtcGxlIGhvdyB0byBkbyB0aGlzLlxuICpcbiAqICMjIyBBZGQgdGhlIE1vbmdvREIgY2xpZW50XG4gKlxuICogYGBgdHNcbiAqIC8vIFRoaXMgYXBwcm9hY2ggaXMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvd2l0aC1tb25nb2RiXG4gKiBpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCJcbiAqXG4gKiBpZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XG4gKiAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZC9NaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBcIk1PTkdPREJfVVJJXCInKVxuICogfVxuICpcbiAqIGNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXG4gKiBjb25zdCBvcHRpb25zID0ge31cbiAqXG4gKiBsZXQgY2xpZW50XG4gKiBsZXQgY2xpZW50UHJvbWlzZTogUHJvbWlzZTxNb25nb0NsaWVudD5cbiAqXG4gKiBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICogICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcbiAqICAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cbiAqICAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICogICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXG4gKiAgICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG4gKiAgIH1cbiAqICAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlXG4gKiB9IGVsc2Uge1xuICogICAvLyBJbiBwcm9kdWN0aW9uIG1vZGUsIGl0J3MgYmVzdCB0byBub3QgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlLlxuICogICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICogICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxuICogfVxuICpcbiAqIC8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXG4gKiAvLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxuICogZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZVxuICogYGBgXG4gKlxuICogIyMjIENvbmZpZ3VyZSBBdXRoLmpzXG4gKlxuICogYGBganNcbiAqIGltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbiAqIGltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL21vbmdvZGItYWRhcHRlclwiXG4gKiBpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGJcIlxuICpcbiAqIC8vIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGVhY2ggb3B0aW9uIChhbmQgYSBmdWxsIGxpc3Qgb2Ygb3B0aW9ucykgZ28gdG9cbiAqIC8vIGh0dHBzOi8vYXV0aGpzLmRldi9yZWZlcmVuY2UvcHJvdmlkZXJzL29hdXRoXG4gKiBleHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gKiAgIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxuICogICAuLi5cbiAqIH0pXG4gKiBgYGBcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBNb25nb0RCQWRhcHRlcihjbGllbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgY29sbGVjdGlvbnMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgeyBmcm9tLCB0byB9ID0gZm9ybWF0O1xuICAgIGNvbnN0IGRiID0gKGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgX2RiID0gKGF3YWl0IGNsaWVudCkuZGIob3B0aW9ucy5kYXRhYmFzZU5hbWUpO1xuICAgICAgICBjb25zdCBjID0geyAuLi5kZWZhdWx0Q29sbGVjdGlvbnMsIC4uLmNvbGxlY3Rpb25zIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBVOiBfZGIuY29sbGVjdGlvbihjLlVzZXJzKSxcbiAgICAgICAgICAgIEE6IF9kYi5jb2xsZWN0aW9uKGMuQWNjb3VudHMpLFxuICAgICAgICAgICAgUzogX2RiLmNvbGxlY3Rpb24oYy5TZXNzaW9ucyksXG4gICAgICAgICAgICBWOiBfZGIuY29sbGVjdGlvbihjPy5WZXJpZmljYXRpb25Ub2tlbnMpLFxuICAgICAgICB9O1xuICAgIH0pKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXN5bmMgY3JlYXRlVXNlcihkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gdG8oZGF0YSk7XG4gICAgICAgICAgICBhd2FpdCAoYXdhaXQgZGIpLlUuaW5zZXJ0T25lKHVzZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGZyb20odXNlcik7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGdldFVzZXIoaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCAoYXdhaXQgZGIpLlUuZmluZE9uZSh7IF9pZDogX2lkKGlkKSB9KTtcbiAgICAgICAgICAgIGlmICghdXNlcilcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKHVzZXIpO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBnZXRVc2VyQnlFbWFpbChlbWFpbCkge1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IChhd2FpdCBkYikuVS5maW5kT25lKHsgZW1haWwgfSk7XG4gICAgICAgICAgICBpZiAoIXVzZXIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZnJvbSh1c2VyKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgZ2V0VXNlckJ5QWNjb3VudChwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCkge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IChhd2FpdCBkYikuQS5maW5kT25lKHByb3ZpZGVyX3Byb3ZpZGVyQWNjb3VudElkKTtcbiAgICAgICAgICAgIGlmICghYWNjb3VudClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCAoYXdhaXQgZGIpLlUuZmluZE9uZSh7IF9pZDogbmV3IE9iamVjdElkKGFjY291bnQudXNlcklkKSB9KTtcbiAgICAgICAgICAgIGlmICghdXNlcilcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKHVzZXIpO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyB1cGRhdGVVc2VyKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgX2lkLCAuLi51c2VyIH0gPSB0byhkYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IChhd2FpdCBkYikuVS5maW5kT25lQW5kVXBkYXRlKHsgX2lkIH0sIHsgJHNldDogdXNlciB9LCB7IHJldHVybkRvY3VtZW50OiBcImFmdGVyXCIgfSk7XG4gICAgICAgICAgICByZXR1cm4gZnJvbShyZXN1bHQpO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBkZWxldGVVc2VyKGlkKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSBfaWQoaWQpO1xuICAgICAgICAgICAgY29uc3QgbSA9IGF3YWl0IGRiO1xuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIG0uQS5kZWxldGVNYW55KHsgdXNlcklkOiB1c2VySWQgfSksXG4gICAgICAgICAgICAgICAgbS5TLmRlbGV0ZU1hbnkoeyB1c2VySWQ6IHVzZXJJZCB9KSxcbiAgICAgICAgICAgICAgICBtLlUuZGVsZXRlT25lKHsgX2lkOiB1c2VySWQgfSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfSxcbiAgICAgICAgbGlua0FjY291bnQ6IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50ID0gdG8oZGF0YSk7XG4gICAgICAgICAgICBhd2FpdCAoYXdhaXQgZGIpLkEuaW5zZXJ0T25lKGFjY291bnQpO1xuICAgICAgICAgICAgcmV0dXJuIGFjY291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHVubGlua0FjY291bnQocHJvdmlkZXJfcHJvdmlkZXJBY2NvdW50SWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCAoYXdhaXQgZGIpLkEuZmluZE9uZUFuZERlbGV0ZShwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCk7XG4gICAgICAgICAgICByZXR1cm4gZnJvbShhY2NvdW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgZ2V0U2Vzc2lvbkFuZFVzZXIoc2Vzc2lvblRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgKGF3YWl0IGRiKS5TLmZpbmRPbmUoeyBzZXNzaW9uVG9rZW4gfSk7XG4gICAgICAgICAgICBpZiAoIXNlc3Npb24pXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgKGF3YWl0IGRiKS5VLmZpbmRPbmUoeyBfaWQ6IG5ldyBPYmplY3RJZChzZXNzaW9uLnVzZXJJZCkgfSk7XG4gICAgICAgICAgICBpZiAoIXVzZXIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVzZXI6IGZyb20odXNlciksXG4gICAgICAgICAgICAgICAgc2Vzc2lvbjogZnJvbShzZXNzaW9uKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGNyZWF0ZVNlc3Npb24oZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IHRvKGRhdGEpO1xuICAgICAgICAgICAgYXdhaXQgKGF3YWl0IGRiKS5TLmluc2VydE9uZShzZXNzaW9uKTtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKHNlc3Npb24pO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyB1cGRhdGVTZXNzaW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgX2lkLCAuLi5zZXNzaW9uIH0gPSB0byhkYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRTZXNzaW9uID0gYXdhaXQgKGF3YWl0IGRiKS5TLmZpbmRPbmVBbmRVcGRhdGUoeyBzZXNzaW9uVG9rZW46IHNlc3Npb24uc2Vzc2lvblRva2VuIH0sIHsgJHNldDogc2Vzc2lvbiB9LCB7IHJldHVybkRvY3VtZW50OiBcImFmdGVyXCIgfSk7XG4gICAgICAgICAgICByZXR1cm4gZnJvbSh1cGRhdGVkU2Vzc2lvbik7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGRlbGV0ZVNlc3Npb24oc2Vzc2lvblRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgKGF3YWl0IGRiKS5TLmZpbmRPbmVBbmREZWxldGUoe1xuICAgICAgICAgICAgICAgIHNlc3Npb25Ub2tlbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZyb20oc2Vzc2lvbik7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGNyZWF0ZVZlcmlmaWNhdGlvblRva2VuKGRhdGEpIHtcbiAgICAgICAgICAgIGF3YWl0IChhd2FpdCBkYikuVi5pbnNlcnRPbmUodG8oZGF0YSkpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHVzZVZlcmlmaWNhdGlvblRva2VuKGlkZW50aWZpZXJfdG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWNhdGlvblRva2VuID0gYXdhaXQgKGF3YWl0IGRiKS5WLmZpbmRPbmVBbmREZWxldGUoaWRlbnRpZmllcl90b2tlbik7XG4gICAgICAgICAgICBpZiAoIXZlcmlmaWNhdGlvblRva2VuKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgY29uc3QgeyBfaWQsIC4uLnJlc3QgfSA9IHZlcmlmaWNhdGlvblRva2VuO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3Q7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6WyJPYmplY3RJZCIsImRlZmF1bHRDb2xsZWN0aW9ucyIsIlVzZXJzIiwiQWNjb3VudHMiLCJTZXNzaW9ucyIsIlZlcmlmaWNhdGlvblRva2VucyIsImZvcm1hdCIsImZyb20iLCJvYmplY3QiLCJuZXdPYmplY3QiLCJrZXkiLCJ2YWx1ZSIsImlkIiwidG9IZXhTdHJpbmciLCJ0byIsIl9pZCIsImhleCIsImxlbmd0aCIsIk1vbmdvREJBZGFwdGVyIiwiY2xpZW50Iiwib3B0aW9ucyIsImNvbGxlY3Rpb25zIiwiZGIiLCJfZGIiLCJkYXRhYmFzZU5hbWUiLCJjIiwiVSIsImNvbGxlY3Rpb24iLCJBIiwiUyIsIlYiLCJjcmVhdGVVc2VyIiwiZGF0YSIsInVzZXIiLCJpbnNlcnRPbmUiLCJnZXRVc2VyIiwiZmluZE9uZSIsImdldFVzZXJCeUVtYWlsIiwiZW1haWwiLCJnZXRVc2VyQnlBY2NvdW50IiwicHJvdmlkZXJfcHJvdmlkZXJBY2NvdW50SWQiLCJhY2NvdW50IiwidXNlcklkIiwidXBkYXRlVXNlciIsInJlc3VsdCIsImZpbmRPbmVBbmRVcGRhdGUiLCIkc2V0IiwicmV0dXJuRG9jdW1lbnQiLCJkZWxldGVVc2VyIiwibSIsIlByb21pc2UiLCJhbGwiLCJkZWxldGVNYW55IiwiZGVsZXRlT25lIiwibGlua0FjY291bnQiLCJ1bmxpbmtBY2NvdW50IiwiZmluZE9uZUFuZERlbGV0ZSIsImdldFNlc3Npb25BbmRVc2VyIiwic2Vzc2lvblRva2VuIiwic2Vzc2lvbiIsImNyZWF0ZVNlc3Npb24iLCJ1cGRhdGVTZXNzaW9uIiwidXBkYXRlZFNlc3Npb24iLCJkZWxldGVTZXNzaW9uIiwiY3JlYXRlVmVyaWZpY2F0aW9uVG9rZW4iLCJ1c2VWZXJpZmljYXRpb25Ub2tlbiIsImlkZW50aWZpZXJfdG9rZW4iLCJ2ZXJpZmljYXRpb25Ub2tlbiIsInJlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@auth/mongodb-adapter/index.js\n");

/***/ })

};
;