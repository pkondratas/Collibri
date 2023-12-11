// using AutoMapper;
// using Collibri.Data;
// using Collibri.Dtos;
// using Collibri.Models;
// using Collibri.Repositories.DbImplementation;
// using Microsoft.EntityFrameworkCore;
// using Moq.EntityFrameworkCore;
//
// namespace Collibri.Tests.Repositories.RoomMembers;
//
// public class RoomMemberRepositoryTests
// {
//     [Theory]
//     [ClassData(typeof(RoomMemberRepositoryTestData.CreateRoomMemberTestData))]
//     void CreateRoomMember_Should_ReturnRoomMember(int code, RoomMemberDTO newMember, RoomMemberDTO? expected,
//         List<Room> rooms, List<RoomMember> roomMembers)
//     {
//         //Assign
//         var dataContext = new Mock<DataContext>();
//         var profile = new Collibri.Repositories.DbImplementation.Mapper.AutoMapper();
//         var configuration = new MapperConfiguration(cfg => cfg.AddProfile(profile));
//         IMapper mapper = new Mapper(configuration);
//
//         dataContext.Setup<DbSet<RoomMember>>(x => x.RoomMembers).ReturnsDbSet(roomMembers);
//         dataContext.Setup<DbSet<Room>>(x => x.Rooms).ReturnsDbSet(rooms);
//
//         var repository = new DbRoomMemberRepository(dataContext.Object, mapper);
//         
//         //Act
//         var actual = repository.CreateRoomMember(code, newMember);
//         
//         //Assert
//         if (expected == null)
//             Assert.Null(actual);
//         else
//             Assert.Equivalent(expected, actual);
//     }
//     
//     [Theory]
//     [ClassData(typeof(RoomMemberRepositoryTestData.DeleteRoomMemberTestData))]
//     void DeleteRoomMember_Should_ReturnRoomMember(int code, string username, RoomMemberDTO? expected,
//         List<Room> rooms, List<RoomMember> roomMembers)
//     {
//         //Assign
//         var dataContext = new Mock<DataContext>();
//         var profile = new Collibri.Repositories.DbImplementation.Mapper.AutoMapper();
//         var configuration = new MapperConfiguration(cfg => cfg.AddProfile(profile));
//         IMapper mapper = new Mapper(configuration);
//
//         dataContext.Setup<DbSet<RoomMember>>(x => x.RoomMembers).ReturnsDbSet(roomMembers);
//         dataContext.Setup<DbSet<Room>>(x => x.Rooms).ReturnsDbSet(rooms);
//
//         var repository = new DbRoomMemberRepository(dataContext.Object, mapper);
//         
//         //Act
//         var actual = repository.DeleteRoomMember(code, username);
//         
//         //Assert
//         if (expected == null)
//             Assert.Null(actual);
//         else
//             Assert.Equivalent(expected, actual);
//     }
// }