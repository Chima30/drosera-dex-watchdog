// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Drosera DEX Watchdog Trap
/// @notice A smart contract to log and flag suspicious DEX activity on Drosera

contract DroseraDEXWatchdog {
    /// @notice Emitted whenever a suspicious swap is detected
    /// @param token The token involved in the swap
    /// @param trader The wallet address performing the swap
    /// @param amountIn The input token amount
    /// @param amountOut The output token amount
    event SuspiciousSwapDetected(
        address indexed token,
        address indexed trader,
        uint256 amountIn,
        uint256 amountOut
    );

    /// @notice Called by external scripts/bots to log suspicious swap behavior
    /// @param token The token address involved in the suspicious swap
    /// @param trader The wallet address making the trade
    /// @param amountIn The amount of input tokens
    /// @param amountOut The amount of output tokens
    function reportSwap(
        address token,
        address trader,
        uint256 amountIn,
        uint256 amountOut
    ) external {
        emit SuspiciousSwapDetected(token, trader, amountIn, amountOut);
    }
}

