import optimizelySdk from '@optimizely/optimizely-sdk';

const loadOptimizely = async () => {
    try {
      const optimizelyInstance = optimizelySdk.createInstance({
        logLevel: 'error',
        sdkKey: 'your-sdk-key',
      });

      if (!optimizelyInstance) {
        throw new Error('Unable to create new Optimizely instance.');
      }

      const { success, reason } = await optimizelyInstance.onReady();

      console.log(success, reason);

      const userId = 'matjaz-user-1';
      const user = optimizelyInstance.createUserContext(userId);

      if (!user) {
        throw new Error(
          `Error: Unable to create new Optimizely User Context for default user (${userId}).`,
        );
      }

      const decision = user.decideAll();

      console.log(decision);
    } catch (e) {
      console.error('Unable to load Optimizely.');
      console.error(e);
    }
  };

  loadOptimizely();
