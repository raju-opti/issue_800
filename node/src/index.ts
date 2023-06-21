import optimizelySdk from '@optimizely/optimizely-sdk';

const loadOptimizely = async () => {
    try {
      // Instantiate Optimizely w/SDK Key & LogLevel @ DEBUG
      const optimizelyInstance = optimizelySdk.createInstance({
        logLevel: 'error',
        sdkKey: 'your-sdk-key',
      });

      if (!optimizelyInstance) {
        throw new Error('Unable to create new Optimizely instance.');
      }

      const { success, reason } = await optimizelyInstance.onReady();

      const userId = 'matjaz-user-1';
      const user = optimizelyInstance.createUserContext(userId);

      if (!user) {
        throw new Error(
          `Error: Unable to create new Optimizely User Context for default user (${userId}).`,
        );
      }

      const decision = user.decideAll();

      console.log(decision);
    //   console.log(`Qualified segments for user (${user.getUserId()}) before fetch:`);
    //   console.log(user.qualifiedSegments); // Should be empty

    //   await user.fetchQualifiedSegments(); // Fetch qualifiedSegments for user

    //   console.log(`Qualified segments for user (${user.getUserId()}) after fetch:`);
    //   console.log(user.qualifiedSegments); // Return updated qualifiedSegments

    //   // Create Custom User (uses FS_USER_ID)
    //   const testUserId = 'test_user_01';
    //   const testUser = optimizelyInstance.createUserContext(testUserId, {
    //     favorite_color: 'red',
    //   });

    //   if (!testUser) {
    //     throw new Error(
    //       `Error: Unable to create new Optimizely User Context for test user (${testUserId}).`,
    //     );
    //   }

    //   // Tie testUserId with email identifier...
    //   console.log('Sending custom ODP event...');
    //   optimizelyInstance.sendOdpEvent(
    //     'associate_email',
    //     undefined,
    //     new Map([['email', 'john.nguyen@optimizely.com']]),
    //   );

    //   // Fetch Qualified Segments
    //   console.log('Fetching qualified segments...');
    //   const fetchedQualifiedSegments = await testUser.fetchQualifiedSegments();

    //   if (!fetchedQualifiedSegments) {
    //     console.warn(
    //       `Warning: Unable to fetch qualified segments for user (${testUser.getUserId()})`,
    //     );
    //   } else {
    //     console.log(`Fetched segments for user (${testUser.getUserId()})`);
    //     console.log(`User's qualified segments: [${user.qualifiedSegments}]`);
    //   }

    //   // Make Decision
    //   const promotionDecision = testUser.decide('promotion');
    //   console.log(`Decision for (promotion) made for user (${testUser.getUserId()}):`);
    //   console.log(promotionDecision);

    //   setOptimizelyLoaded(success);
    } catch (e) {
      console.error('Unable to load Optimizely.');
      console.error(e);
    }
  };

  loadOptimizely();
