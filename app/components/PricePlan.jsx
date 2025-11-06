// const plans = [
//   {
//     name: "Basic Plan",
//     price: "49K",
//     description:
//       "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//   },
//   {
//     name: "Beginner Plan",
//     price: "79K",
//     description:
//       "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//   },
//   {
//     name: "Premium Plan",
//     price: "109K",
//     description:
//       "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//   },
//   {
//     name: "Ultimate Plan",
//     price: "149K",
//     description:
//       "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
//   },
// ];

// export default function PricingPlans() {
//   return (
//     <section className="bg-gray-50 py-20 px-4 text-center">
//       <h3 className="text-teal-600 font-semibold uppercase mb-2">
//         Our Pricing
//       </h3>
//       <h2 className="text-4xl font-bold mb-10">Pricing & Packages</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//         {plans.map((plan, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-between hover:shadow-lg transition"
//           >
//             <div>
//               <h4 className="uppercase text-sm font-semibold text-gray-700 mb-2">
//                 {plan.name}
//               </h4>
//               <p className="text-3xl font-bold text-teal-500 mb-4">
//                 <span className="text-base text-black align-top mr-1">$</span>
//                 {plan.price}
//               </p>
//               <p className="text-gray-500 text-sm mb-8">{plan.description}</p>
//             </div>
//             <button className="mt-auto border border-teal-500 text-teal-500 px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition">
//               GET STARTED
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
