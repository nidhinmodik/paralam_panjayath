import Image from 'next/legacy/image';
import React from 'react';
import map from '../../assets/Screenshot 2024-10-03 140733.png';
import Gallery from './Gallery';

const AboutPanjayath = () => {
  const PANCHAYAT = [
    {
      name: "Paralam",
      localname: "പാറളം",
      type: "Village Panchayat",
      villages: "Pallippuram   Venginissery (ct)   Kodannur (ct)   Paralam (ct)",
      interpanchayat: "Cherpu",
      block: "Cherpu",
      districtpanchayat: "Thrissur",
      state: "Kerala",
      lgdcode: "221841",
    },
  ];

  const schoolData = [
    { id: 1, name: 'St Antonys Hs Ammadam', management: 'Govt Aided', category: 'Higher Secondary With Grades 6 To 12', boys: 787, girls: 688, teachers: 53, schoolCode: '32070401202' },
    { id: 2, name: 'Alps Pallipuram', management: 'Govt Aided', category: 'Primary Only With Grades 1 To 5', boys: 50, girls: 45, teachers: 6, schoolCode: '32070401301' },
    { id: 3, name: 'Alps Chenam', management: 'Govt Aided', category: 'Primary Only With Grades 1 To 5', boys: 22, girls: 21, teachers: 6, schoolCode: '32070401101' },
    { id: 4, name: 'Mahatma Lps Paralam', management: 'Govt Aided', category: 'Primary Only With Grades 1 To 5', boys: 20, girls: 15, teachers: 6, schoolCode: '32070401201' },
    { id: 5, name: 'Calps Venginissery', management: 'Govt Aided', category: 'Primary Only With Grades 1 To 5', boys: 143, girls: 59, teachers: 10, schoolCode: '32070401401' },
    { id: 6, name: 'Gurukulam Public School Venginissery', management: 'Private Unaided', category: 'Higher Secondary With Grades 1 To 12', boys: 574, girls: 432, teachers: 49, schoolCode: '32070401102' },
    { id: 7, name: 'Glps Ammadam', management: 'Department Of Education', category: 'Primary Only With Grades 1 To 5', boys: 108, girls: 100, teachers: 9, schoolCode: '32070401801' },
    { id: 8, name: 'Santhwanam Buds School Venginissery', management: 'Private Unaided', category: 'Secondary/sr. Sec. With Grades 1 To 10', boys: 40, girls: 24, teachers: 4, schoolCode: '32070407601' },
    { id: 9, name: 'St Antonys Ups Kodannur', management: 'Govt Aided', category: 'Upper Primary With Grades 1 To 8', boys: 214, girls: 183, teachers: 14, schoolCode: '32070400901' },
  ];

  const members = [
    { name: "Mini Vinayan", designation: "President", mobile: "9496046116", email: "paralamgp@gmail.com" },
    { name: "Anitha Prasannan", designation: "Member", mobile: "9495978020", email: "paralamgp@gmail.com" },
    { name: "Asha Mathew", designation: "Member", mobile: "9846163673", email: "paralamgp@gmail.com" },
    { name: "Daly Binoy", designation: "Member", mobile: "8921057924", email: "paralamgp@gmail.com" },
    { name: "Juby Mathew", designation: "Member", mobile: "9447614983", email: "jubymathew29@gmail.com" },
    { name: "Lijeev P K", designation: "Member", mobile: "9744960608", email: "lijeevpk@gmail.com" },
    { name: "Mani K K", designation: "Member", mobile: "8593054996", email: "paralamgp@gmail.com" },
    { name: "Sibi Suresh", designation: "Member", mobile: "9946761344", email: "sibisuresh201@gmail.com" },
    { name: "Sminu Mukesh", designation: "Member", mobile: "8078365799", email: "paralamgp@gmail.com" },
    { name: "Srejith C R", designation: "Member", mobile: "9846240482", email: "paralamgp@gmail.com" },
    { name: "Subitha Subash", designation: "Member", mobile: "9497561276", email: "paralamgp@gmail.com" },
    { name: "Sunil K B", designation: "Member", mobile: "7025951802", email: "paralamgp@gmail.com" },
    { name: "James P Paul", designation: "Standing Committee Chairman", mobile: "9495073471", email: "jamesammadam@gmail.com" },
    { name: "Pramod K", designation: "Standing Committee Chairman", mobile: "9048910780", email: "paralamgp@gmail.com" },
    { name: "Vidya Nandanam", designation: "Standing Committee Chairman", mobile: "9961966310", email: "paralamgp@gmail.com" },
  ];

  const wards = [
    { no: 1, name: "Aaryampadam", wardNo: 1, lgdCode: "1481018" },
    { no: 2, name: "Chakyarkadavu", wardNo: 2, lgdCode: "1481019" },
    { no: 3, name: "Subramanyapuram", wardNo: 3, lgdCode: "1481020" },
    { no: 4, name: "Venginissery", wardNo: 4, lgdCode: "1481021" },
    { no: 5, name: "Arattukadavu", wardNo: 5, lgdCode: "1481022" },
    { no: 6, name: "Perukkara", wardNo: 6, lgdCode: "1481023" },
    { no: 7, name: "Sivapuram", wardNo: 7, lgdCode: "1481024" },
    { no: 8, name: "Paris-kootalakunnu", wardNo: 8, lgdCode: "1481025" },
    { no: 9, name: "Paralam", wardNo: 9, lgdCode: "1481026" },
    { no: 10, name: "Parppakadavu", wardNo: 10, lgdCode: "1481027" },
    { no: 11, name: "Chenam", wardNo: 11, lgdCode: "1481028" },
    { no: 12, name: "Ammadam", wardNo: 12, lgdCode: "1481029" },
    { no: 13, name: "Kodannur", wardNo: 13, lgdCode: "1481030" },
    { no: 14, name: "Pallippuram", wardNo: 14, lgdCode: "1481031" },
    { no: 15, name: "Sasthamkadavu", wardNo: 15, lgdCode: "1481032" },
  ];

  return (
    <div className='w-full flex flex-col gap-y-[14px] my-10'>
      {/* Title */}
      <div className='text-xl font-bold text-dark relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3 mx-10 my-5'>
        പഞ്ചായത്തിനെക്കുറിച്ച് അറിയാൻ
      </div>

      {/* Main content */}
      <div className='flex flex-col md:flex-row'>
        <div className='mx-10'>
          <Image style={{ borderRadius: '15px' }} src={map} />
        </div>

        {/* Responsive Panchayat Details Table */}
        <div className='overflow-x-auto mx-10'>
          <table className="min-w-full table-auto border-collapse border border-gray-300 mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Detail</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Name</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].name}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Local Name</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].localname}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Type</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].type}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Villages</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].villages}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Inter Panchayat</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].interpanchayat}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>Block</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].block}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>District Panchayat</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].districtpanchayat}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>State</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].state}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2"><strong>LGD Code</strong></td>
                <td className="border border-gray-300 px-4 py-2">{PANCHAYAT[0].lgdcode}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Gallery/>
      </div>
      
      <div className='text-xl font-bold text-dark relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3 mx-10 my-5'>
        വാർഡുകൾ
      </div>
      <div className="w-full p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">No.</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Ward Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Ward No.</th>
                <th className="border border-gray-300 px-4 py-2 text-left">LGD Code</th>
              </tr>
            </thead>
            <tbody>
              {wards.map((ward, index) => (
                <tr key={index} className="bg-white">
                  <td className="border border-gray-300 px-4 py-2">{ward.no}</td>
                  <td className="border border-gray-300 px-4 py-2">{ward.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{ward.wardNo}</td>
                  <td className="border border-gray-300 px-4 py-2">{ward.lgdCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='text-xl font-bold text-dark relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3 mx-10 my-5'>
        മെമ്പേഴ്‌സ്
      </div>
      <div className="w-full p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Designation</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Mobile No</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index} className="bg-white">
                  <td className="border border-gray-300 px-4 py-2">{member.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{member.designation}</td>
                  <td className="border border-gray-300 px-4 py-2">{member.mobile}</td>
                  <td className="border border-gray-300 px-4 py-2">{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='w-full p-4'>
        <div className='text-xl font-bold text-dark relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3 mx-10 my-5'>
          പാറളം പഞ്ചായത്തിലെ സ്‌കൂളുകൾ
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">#</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Management</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Boys</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Girls</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Teachers</th>
                <th className="border border-gray-300 px-4 py-2 text-left">School Code</th>
              </tr>
            </thead>
            <tbody>
              {schoolData.map((school) => (
                <tr key={school.id}>
                  <td className="border border-gray-300 px-4 py-2">{school.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{school.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{school.management}</td>
                  <td className="border border-gray-300 px-4 py-2">{school.category}</td>
                  <td className="border border-gray-300 px-4 py-2">{school.boys}</td>
                  <td className="border border-gray-300 px-4 py-2">{school.girls}</td>
                  <td className="border border-gray-300 px-4 py-2">{school.teachers}</td>
                  <td className="border border-gray-300 px-4 py-2">{school.schoolCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutPanjayath;